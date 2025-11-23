package domain.course.entity;

import java.util.concurrent.atomic.AtomicLong;

public class Lesson {

    private static final AtomicLong SEQ = new AtomicLong(1);
    private Long id;
    private String title;
    private String content;
    private int xpReward;

    public Lesson(Long id, String title, String content, int xpReward) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.xpReward = xpReward;
        if (this.id == null) this.id = nextId();
    }

    public static long nextId() { return SEQ.getAndIncrement(); }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public String getContent() { return content; }
    public int getXPReward() { return xpReward; }
}
