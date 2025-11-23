package domain.course.entity;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

public class Course {

    private static final AtomicLong SEQ = new AtomicLong(1);

    private Long id;
    private String title;
    private String description;
    private int requiredXP;
    private final List<Lesson> lessons = new ArrayList<>();
    private final List<Activity> activities = new ArrayList<>();

    public Course(Long id, String title, String description, int requiredXP) {
        this.id = id == null ? SEQ.getAndIncrement() : id;
        this.title = title;
        this.description = description;
        this.requiredXP = requiredXP;
    }

    public boolean canUserAccess(int userXP) {
        return userXP >= requiredXP;
    }

    public void addLesson(Lesson lesson) {
        lesson.setId(Lesson.nextId());
        lessons.add(lesson);
    }

    public void addActivity(Activity activity) {
        activity.setId(Activity.nextId());
        activities.add(activity);
    }

    // getters
    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getDescription() { return description; }
    public int getRequiredXP() { return requiredXP; }
    public List<Lesson> getLessons() { return lessons; }
    public List<Activity> getActivities() { return activities; }
}
