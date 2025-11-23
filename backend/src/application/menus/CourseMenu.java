package application.menus;

import domain.course.entity.Activity;
import domain.course.entity.Course;
import domain.course.entity.Lesson;
import domain.course.repository.InMemoryCourseRepository;
import domain.course.service.CourseService;
import domain.course.service.XPRewardPolicy;
import domain.user.repository.InMemoryUserRepository;
import domain.user.service.UserService;

import java.util.List;
import java.util.Scanner;

public class CourseMenu {

    private final Scanner scanner;
    private final InMemoryCourseRepository courseRepo = InMemoryCourseRepository.getInstance();
    private final InMemoryUserRepository userRepo = InMemoryUserRepository.getInstance();
    private final CourseService courseService = new CourseService(courseRepo);
    private final XPRewardPolicy xpPolicy = new XPRewardPolicy();
    private final UserService userService = new UserService(userRepo);

    public CourseMenu(Scanner scanner) {
        this.scanner = scanner;
    }

    public void start() {
        String option;
        do {
            System.out.println("\n--- Cursos ---");
            System.out.println("1) Criar curso");
            System.out.println("2) Listar cursos");
            System.out.println("3) Adicionar aula a curso");
            System.out.println("4) Adicionar atividade a curso");
            System.out.println("5) Acessar curso (simular conclusão de aula/atividade)");
            System.out.println("0) Voltar");
            System.out.print("Opção: ");
            option = scanner.nextLine().trim();

            switch (option) {
                case "1" -> createCourse();
                case "2" -> listAll();
                case "3" -> addLesson();
                case "4" -> addActivity();
                case "5" -> accessCourse();
                case "0" -> {}
                default -> System.out.println("Opção inválida.");
            }
        } while (!option.equals("0"));
    }

    private void createCourse() {
        System.out.print("Título: ");
        var title = scanner.nextLine().trim();
        System.out.print("Descrição: ");
        var desc = scanner.nextLine().trim();
        System.out.print("XP mínimo para acesso (requiredXP): ");
        var required = parseInt(scanner.nextLine());
        Course c = courseService.createCourse(title, desc, required);
        System.out.println("Curso criado com id: " + c.getId());
    }

    private void listAll() {
        List<Course> courses = courseRepo.findAll();
        if (courses.isEmpty()) {
            System.out.println("Nenhum curso.");
            return;
        }
        for (Course c : courses) {
            System.out.printf("id=%d, title=%s, requiredXP=%d, lessons=%d, activities=%d%n",
                    c.getId(), c.getTitle(), c.getRequiredXP(), c.getLessons().size(), c.getActivities().size());
        }
    }

    private void addLesson() {
        System.out.print("Id do curso: ");
        var courseId = parseLong(scanner.nextLine());
        Course c = courseRepo.findById(courseId);
        if (c == null) {
            System.out.println("Curso não encontrado.");
            return;
        }
        System.out.print("Título da aula: ");
        var t = scanner.nextLine().trim();
        System.out.print("Conteúdo (texto): ");
        var content = scanner.nextLine().trim();
        System.out.print("XP recompensa: ");
        var xp = parseInt(scanner.nextLine());
        Lesson l = new Lesson(null, t, content, xp);
        courseService.addLesson(courseId, l);
        System.out.println("Aula adicionada.");
    }

    private void addActivity() {
        System.out.print("Id do curso: ");
        var courseId = parseLong(scanner.nextLine());
        Course c = courseRepo.findById(courseId);
        if (c == null) {
            System.out.println("Curso não encontrado.");
            return;
        }
        System.out.print("Descrição da atividade: ");
        var desc = scanner.nextLine().trim();
        System.out.print("XP recompensa: ");
        var xp = parseInt(scanner.nextLine());
        Activity a = new Activity(null, desc, xp);
        courseService.addActivity(courseId, a);
        System.out.println("Atividade adicionada.");
    }

    private void accessCourse() {
        System.out.print("Id do usuário: ");
        var userId = parseLong(scanner.nextLine());
        var user = userRepo.findById(userId);
        if (user == null) {
            System.out.println("Usuário não encontrado.");
            return;
        }
        System.out.print("Id do curso: ");
        var courseId = parseLong(scanner.nextLine());
        var course = courseRepo.findById(courseId);
        if (course == null) {
            System.out.println("Curso não encontrado.");
            return;
        }
        if (!course.canUserAccess(user.getXp())) {
            System.out.println("Usuário não tem XP suficiente para acessar este curso.");
            return;
        }
        // show lessons and activities
        System.out.println("Aulas:");
        var lessons = course.getLessons();
        for (int i = 0; i < lessons.size(); i++) {
            System.out.printf("[%d] %s (XP %d)%n", i, lessons.get(i).getTitle(), lessons.get(i).getXPReward());
        }
        System.out.println("Atividades:");
        var activities = course.getActivities();
        for (int i = 0; i < activities.size(); i++) {
            System.out.printf("[%d] %s (XP %d)%n", i, activities.get(i).getDescription(), activities.get(i).getXPReward());
        }

        System.out.println("Escolha ação: 1=Concluir aula, 2=Concluir atividade, 0=voltar");
        var action = scanner.nextLine().trim();
        switch (action) {
            case "1" -> {
                System.out.print("Índice da aula: ");
                var idx = parseInt(scanner.nextLine());
                if (idx < 0 || idx >= lessons.size()) {
                    System.out.println("Índice inválido.");
                    return;
                }
                var lesson = lessons.get(idx);
                xpPolicy.applyXPForLessonCompletion(user, lesson);
                System.out.println("Aula concluída. XP aplicado: " + lesson.getXPReward());
            }
            case "2" -> {
                System.out.print("Índice da atividade: ");
                var idx = parseInt(scanner.nextLine());
                if (idx < 0 || idx >= activities.size()) {
                    System.out.println("Índice inválido.");
                    return;
                }
                var act = activities.get(idx);
                xpPolicy.applyXPForActivityCompletion(user, act);
                System.out.println("Atividade concluída. XP aplicado: " + act.getXPReward());
            }
            default -> System.out.println("Voltando...");
        }
        // save user changes
        userRepo.save(user);
    }

    private Long parseLong(String s) {
        try {
            return Long.parseLong(s.trim());
        } catch (Exception e) {
            return -1L;
        }
    }

    private int parseInt(String s) {
        try {
            return Integer.parseInt(s.trim());
        } catch (Exception e) {
            return -1;
        }
    }
}
