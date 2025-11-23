package domain.user.service;

import domain.user.entity.User;
import domain.user.repository.UserRepository;
import domain.user.vo.PasswordHash;

public class UserService {

    private final UserRepository repository;

    public UserService(UserRepository repo) {
        this.repository = repo;
    }

    public User registerUser(String name, String email, String plainPassword) {
        var existing = repository.findByEmail(email);
        if (existing != null) {
            throw new IllegalArgumentException("Email já cadastrado");
        }
        var ph = PasswordHash.fromPlaintext(plainPassword);
        User u = new User(null, name, email, ph);
        repository.save(u);
        return u;
    }

    public User login(String email, String plainPassword) {
        User u = repository.findByEmail(email);
        if (u == null) return null;
        if (u.authenticate(plainPassword)) return u;
        return null;
    }
}
