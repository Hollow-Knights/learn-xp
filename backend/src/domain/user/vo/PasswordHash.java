package domain.user.vo;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HexFormat;
import java.util.Objects;

public final class PasswordHash {

    private final String hash;

    private PasswordHash(String hash) {
        this.hash = Objects.requireNonNull(hash);
    }

    public static PasswordHash fromPlaintext(String password) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] hashed = md.digest(password.getBytes());
            return new PasswordHash(HexFormat.of().formatHex(hashed));
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("Erro ao gerar hash de senha", e);
        }
    }

    public boolean matches(String plainPassword) {
        return this.hash.equals(fromPlaintext(plainPassword).hash);
    }

    public String getHash() {
        return hash;
    }
}
