package domain.user.entity;

import java.util.HashSet;
import java.util.Set;

public class UserProgress {

    private final Long courseId;
    private final Set<Long> completedLessons = new HashSet<>();
    private final Set<Long> completedActivities = new HashSet<>();

    public UserProgress(Long courseId) {
        this.courseId = courseId;
    }

    public void completeLesson(Long lessonId) {
        completedLessons.add(lessonId);
    }

    public void completeActivity(Long activityId) {
        completedActivities.add(activityId);
    }

    public boolean isLessonCompleted(Long lessonId) {
        return completedLessons.contains(lessonId);
    }

    public Long getCourseId() {
        return courseId;
    }

    public Set<Long> getCompletedLessons() {
        return completedLessons;
    }

    public Set<Long> getCompletedActivities() {
        return completedActivities;
    }
}
