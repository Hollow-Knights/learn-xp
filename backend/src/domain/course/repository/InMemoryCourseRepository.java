package domain.course.repository;

import domain.course.entity.Course;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

public class InMemoryCourseRepository implements CourseRepository {

    private static final InMemoryCourseRepository INSTANCE = new InMemoryCourseRepository();
    private final List<Course> storage = new ArrayList<>();
    private final AtomicLong seq = new AtomicLong(1);

    private InMemoryCourseRepository() {}

    public static InMemoryCourseRepository getInstance() {
        return INSTANCE;
    }

    @Override
    public Course save(Course course) {
        if (course.getId() == null || course.getId() <= 0) {
            // set id via constructor already does it; just add
            storage.add(course);
        } else {
            storage.removeIf(c -> c.getId().equals(course.getId()));
            storage.add(course);
        }
        return course;
    }

    @Override
    public Course findById(Long id) {
        return storage.stream().filter(c -> c.getId().equals(id)).findFirst().orElse(null);
    }

    @Override
    public List<Course> findAll() {
        return new ArrayList<>(storage);
    }
}
