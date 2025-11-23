package domain.course.entity;

import java.util.concurrent.atomic.AtomicLong;

public class Activity {

    private static final AtomicLong SEQ = new AtomicLong(1);
    private Long id;
    private String description;
    private int xpReward;

    public Activity(Long id, String description, int xpReward) {
        this.id = id;
        this.description = description;
        this.xpReward = xpReward;
        if (this.id == null) this.id = nextId();
    }

    public static long nextId() { return SEQ.getAndIncrement(); }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getDescription() { return description; }
    public int getXPReward() { return xpReward; }
}
