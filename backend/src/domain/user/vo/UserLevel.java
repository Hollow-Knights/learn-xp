package domain.user.vo;

public enum UserLevel {
    INICIANTE(0, 1250),
    INTERMEDIARIO(1251, 3000),
    AVANCADO(3001, Integer.MAX_VALUE);

    private final int minXP;
    private final int maxXP;

    UserLevel(int minXP, int maxXP) {
        this.minXP = minXP;
        this.maxXP = maxXP;
    }

    public static UserLevel calculateFromXP(int xp) {
        for (UserLevel lvl : values()) {
            if (xp >= lvl.minXP && xp <= lvl.maxXP) {
                return lvl;
            }
        }
        return INICIANTE;
    }
}
