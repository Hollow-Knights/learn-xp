-- ===========================
-- TABELA USER
-- ===========================
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    xp INT DEFAULT 0,
    level VARCHAR(20) NOT NULL
);

-- ===========================
-- TABELA COURSE
-- ===========================
CREATE TABLE course (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    required_xp INT DEFAULT 0
);

-- ===========================
-- TABELA LESSON
-- ===========================
CREATE TABLE lesson (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    course_id BIGINT NOT NULL,
    title VARCHAR(150) NOT NULL,
    content TEXT,
    xp_reward INT NOT NULL DEFAULT 0,
    FOREIGN KEY (course_id) REFERENCES course(id)
);

-- ===========================
-- TABELA COMMENT
-- ===========================
CREATE TABLE comment (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL,
    course_id BIGINT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (course_id) REFERENCES course(id)
);

-- ===========================
-- TABELA USER_PROGRESS
-- (Relacionamento N-N entre USER e LESSON)
-- ===========================
CREATE TABLE user_progress (
    user_id BIGINT NOT NULL,
    lesson_id BIGINT NOT NULL,
    completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, lesson_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (lesson_id) REFERENCES lesson(id)
);
