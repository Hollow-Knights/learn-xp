package domain.ranking;

import domain.user.entity.User;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class RankingService {

    public List<RankingEntry> getGlobalRanking(List<User> users) {
        return users.stream()
                .sorted(Comparator.comparingInt(User::getXp).reversed())
                .map(u -> new RankingEntry(u.getId(), u.getEmail(), u.getXp()))
                .collect(Collectors.toList());
    }
}
