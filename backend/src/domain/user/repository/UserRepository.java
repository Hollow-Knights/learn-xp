package domain.user.repository;

import domain.user.entity.User;

import java.util.List;

public interface UserRepository {
    User save(User user);
    User findById(Long id);
    User findByEmail(String email);
    List<User> findAll();
}
