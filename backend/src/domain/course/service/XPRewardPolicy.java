package domain.course.service;

import domain.course.entity.Activity;
import domain.course.entity.Lesson;
import domain.user.entity.User;

public class XPRewardPolicy {

    public void applyXPForLessonCompletion(User user, Lesson lesson) {
        int xp = Math.max(0, lesson.getXPReward());
        user.addXP(xp);
    }

    public void applyXPForActivityCompletion(User user, Activity activity) {
        int xp = Math.max(0, activity.getXPReward());
        user.addXP(xp);
    }
}
