package application.menus;

import domain.ranking.RankingService;
import domain.ranking.RankingEntry;
import domain.user.repository.InMemoryUserRepository;

import java.util.List;
import java.util.Scanner;

public class RankingMenu {

    private final Scanner scanner;
    private final InMemoryUserRepository userRepo = InMemoryUserRepository.getInstance();
    private final RankingService rankingService = new RankingService();

    public RankingMenu(Scanner scanner) {
        this.scanner = scanner;
    }

    public void start() {
        String option;
        do {
            System.out.println("\n--- Ranking ---");
            System.out.println("1) Ver ranking global");
            System.out.println("0) Voltar");
            System.out.print("Opção: ");
            option = scanner.nextLine().trim();

            switch (option) {
                case "1" -> showGlobalRanking();
                case "0" -> {}
                default -> System.out.println("Opção inválida.");
            }
        } while (!option.equals("0"));
    }

    private void showGlobalRanking() {
        var users = userRepo.findAll();
        List<RankingEntry> ranking = rankingService.getGlobalRanking(users);
        if (ranking.isEmpty()) {
            System.out.println("Sem usuários no ranking.");
            return;
        }
        System.out.println("=== Ranking Global ===");
        for (int i = 0; i < ranking.size(); i++) {
            var r = ranking.get(i);
            System.out.printf("%d) userId=%d, email=%s, xp=%d%n", i+1, r.userId(), r.userEmail(), r.xp());
        }
    }
}
