package application;

import application.menus.CourseMenu;
import application.menus.RankingMenu;
import application.menus.UserMenu;

import java.util.Scanner;

public class ConsoleMenu {

    private final Scanner scanner = new Scanner(System.in);
    private final UserMenu userMenu = new UserMenu(scanner);
    private final CourseMenu courseMenu = new CourseMenu(scanner);
    private final RankingMenu rankingMenu = new RankingMenu(scanner);

    public void start() {
        String option;
        do {
            System.out.println("\n=== LearnXP - Menu Principal ===");
            System.out.println("1) Usuários");
            System.out.println("2) Cursos");
            System.out.println("3) Ranking");
            System.out.println("0) Sair");
            System.out.print("Escolha uma opção: ");
            option = scanner.nextLine().trim();

            switch (option) {
                case "1" -> userMenu.start();
                case "2" -> courseMenu.start();
                case "3" -> rankingMenu.start();
                case "0" -> System.out.println("Saindo...");
                default -> System.out.println("Opção inválida.");
            }
        } while (!option.equals("0"));
    }
}
