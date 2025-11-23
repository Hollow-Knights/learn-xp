package domain.course.service;

import domain.course.entity.Course;
import domain.course.entity.Lesson;
import domain.course.entity.Activity;
import domain.course.repository.CourseRepository;

public class CourseService {

    private final CourseRepository repo;

    public CourseService(CourseRepository repo) {
        this.repo = repo;
    }

    public Course createCourse(String title, String description, int requiredXP) {
        Course c = new Course(null, title, description, requiredXP);
        repo.save(c);
        return c;
    }

    public void addLesson(Long courseId, Lesson lesson) {
        var c = repo.findById(courseId);
        if (c == null) throw new IllegalArgumentException("Curso não encontrado");
        c.addLesson(lesson);
        repo.save(c);
    }

    public void addActivity(Long courseId, Activity activity) {
        var c = repo.findById(courseId);
        if (c == null) throw new IllegalArgumentException("Curso não encontrado");
        c.addActivity(activity);
        repo.save(c);
    }
}
