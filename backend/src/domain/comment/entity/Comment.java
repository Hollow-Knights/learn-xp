package domain.comment.entity;

import java.time.LocalDateTime;

public class Comment {

    private Long id;
    private Long userId;
    private Long courseId;
    private String message;
    private final LocalDateTime createdAt = LocalDateTime.now();

    public Comment(Long id, Long userId, Long courseId, String message) {
        this.id = id;
        this.userId = userId;
        this.courseId = courseId;
        this.message = message;
    }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public Long getUserId() { return userId; }
    public Long getCourseId() { return courseId; }
    public String getMessage() { return message; }
}
