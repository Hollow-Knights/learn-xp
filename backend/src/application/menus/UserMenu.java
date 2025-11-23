package application.menus;

import domain.user.entity.User;
import domain.user.repository.InMemoryUserRepository;
import domain.user.service.UserService;
import domain.user.vo.PasswordHash;

import java.util.List;
import java.util.Scanner;

public class UserMenu {

    private final Scanner scanner;
    private final InMemoryUserRepository userRepo = InMemoryUserRepository.getInstance();
    private final UserService userService = new UserService(userRepo);

    public UserMenu(Scanner scanner) {
        this.scanner = scanner;
    }

    public void start() {
        String option;
        do {
            System.out.println("\n--- Usuários ---");
            System.out.println("1) Cadastrar usuário");
            System.out.println("2) Listar usuários");
            System.out.println("3) Buscar por id");
            System.out.println("4) Atualizar nome/email");
            System.out.println("5) Autenticar (login)");
            System.out.println("0) Voltar");
            System.out.print("Opção: ");
            option = scanner.nextLine().trim();

            switch (option) {
                case "1" -> register();
                case "2" -> listAll();
                case "3" -> findById();
                case "4" -> update();
                case "5" -> authenticate();
                case "0" -> {}
                default -> System.out.println("Opção inválida.");
            }
        } while (!option.equals("0"));
    }

    private void register() {
        System.out.print("Nome: ");
        var name = scanner.nextLine().trim();
        System.out.print("Email: ");
        var email = scanner.nextLine().trim();
        System.out.print("Senha: ");
        var pass = scanner.nextLine().trim();
        User created = userService.registerUser(name, email, pass);
        System.out.println("Usuário cadastrado com id: " + created.getId());
    }

    private void listAll() {
        List<User> users = userRepo.findAll();
        if (users.isEmpty()) {
            System.out.println("Nenhum usuário cadastrado.");
            return;
        }
        users.forEach(u -> System.out.printf("id=%d, nome=%s, email=%s, xp=%d, level=%s%n",
                u.getId(), u.getName(), u.getEmail(), u.getXp(), u.getLevel()));
    }

    private void findById() {
        System.out.print("Id do usuário: ");
        var id = parseLong(scanner.nextLine());
        var u = userRepo.findById(id);
        if (u == null) {
            System.out.println("Usuário não encontrado.");
        } else {
            System.out.printf("id=%d, nome=%s, email=%s, xp=%d, level=%s%n",
                    u.getId(), u.getName(), u.getEmail(), u.getXp(), u.getLevel());
        }
    }

    private void update() {
        System.out.print("Id do usuário: ");
        var id = parseLong(scanner.nextLine());
        var u = userRepo.findById(id);
        if (u == null) {
            System.out.println("Usuário não encontrado.");
            return;
        }
        System.out.print("Novo nome (enter para manter): ");
        var name = scanner.nextLine().trim();
        System.out.print("Novo email (enter para manter): ");
        var email = scanner.nextLine().trim();
        if (!name.isEmpty()) u.setName(name);
        if (!email.isEmpty()) u.setEmail(email);
        userRepo.save(u);
        System.out.println("Usuário atualizado.");
    }

    private void authenticate() {
        System.out.print("Email: ");
        var email = scanner.nextLine().trim();
        System.out.print("Senha: ");
        var pass = scanner.nextLine().trim();
        var user = userRepo.findByEmail(email);
        if (user == null) {
            System.out.println("Usuário não encontrado.");
            return;
        }
        boolean ok = user.authenticate(pass);
        System.out.println(ok ? "Autenticado com sucesso." : "Falha na autenticação.");
    }

    private Long parseLong(String s) {
        try {
            return Long.parseLong(s.trim());
        } catch (Exception e) {
            return -1L;
        }
    }
}
