package domain.course.repository;

import domain.course.entity.Course;

import java.util.List;

public interface CourseRepository {
    Course save(Course course);
    Course findById(Long id);
    List<Course> findAll();
}
