package domain.comment.repository;

import domain.comment.entity.Comment;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

public class InMemoryCommentRepository {

    private static final InMemoryCommentRepository INSTANCE = new InMemoryCommentRepository();
    private final List<Comment> storage = new ArrayList<>();
    private final AtomicLong seq = new AtomicLong(1);

    private InMemoryCommentRepository() {}

    public static InMemoryCommentRepository getInstance() { return INSTANCE; }

    public Comment save(Comment c) {
        if (c == null) throw new IllegalArgumentException("Comment null");
        if (c.getUserId() == null) throw new IllegalArgumentException("Missing userId");
        // naive id set
        storage.add(c);
        return c;
    }

    public List<Comment> findAll() { return new ArrayList<>(storage); }
}

