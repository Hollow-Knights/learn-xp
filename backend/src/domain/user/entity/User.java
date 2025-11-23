package domain.user.entity;

import domain.user.vo.PasswordHash;
import domain.user.vo.UserLevel;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class User {

    private Long id;
    private String name;
    private String email;
    private PasswordHash passwordHash;
    private int xp;
    private UserLevel level;
    private final List<UserProgress> progress = new ArrayList<>();

    public User(Long id, String name, String email, PasswordHash passwordHash) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.passwordHash = passwordHash;
        this.xp = 0;
        this.level = UserLevel.INICIANTE;
    }

    // business
    public void addXP(int amount) {
        if (amount <= 0) return;
        this.xp += amount;
        updateLevel();
    }

    private void updateLevel() {
        this.level = UserLevel.calculateFromXP(this.xp);
    }

    public UserProgress getProgressForCourse(Long courseId) {
        return progress.stream()
                .filter(p -> Objects.equals(p.getCourseId(), courseId))
                .findFirst()
                .orElseGet(() -> {
                    UserProgress p = new UserProgress(courseId);
                    progress.add(p);
                    return p;
                });
    }

    public boolean authenticate(String plainPassword) {
        return passwordHash.matches(plainPassword);
    }

    // setters/getters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public int getXp() { return xp; }
    public UserLevel getLevel() { return level; }
    public void setPasswordHash(PasswordHash ph) { this.passwordHash = ph; }
}
