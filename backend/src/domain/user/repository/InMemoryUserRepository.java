package domain.user.repository;

import domain.user.entity.User;
import domain.user.vo.PasswordHash;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

public class InMemoryUserRepository implements UserRepository {

    private static final InMemoryUserRepository INSTANCE = new InMemoryUserRepository();
    private final List<User> storage = new ArrayList<>();
    private final AtomicLong seq = new AtomicLong(1);

    private InMemoryUserRepository() {}

    public static InMemoryUserRepository getInstance() {
        return INSTANCE;
    }

    @Override
    public User save(User user) {
        if (user.getId() == null || user.getId() <= 0) {
            user.setId(seq.getAndIncrement());
            storage.add(user);
        } else {
            // replace existing
            storage.removeIf(u -> u.getId().equals(user.getId()));
            storage.add(user);
        }
        return user;
    }

    @Override
    public User findById(Long id) {
        return storage.stream().filter(u -> u.getId().equals(id)).findFirst().orElse(null);
    }

    @Override
    public User findByEmail(String email) {
        return storage.stream().filter(u -> u.getEmail().equalsIgnoreCase(email)).findFirst().orElse(null);
    }

    @Override
    public List<User> findAll() {
        return new ArrayList<>(storage);
    }

    // helper used by initial sample data
    public User createAndSave(String name, String email, String plainPassword) {
        User u = new User(null, name, email, PasswordHash.fromPlaintext(plainPassword));
        save(u);
        return u;
    }
}
