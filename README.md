# Learn XP – Plataforma de Estudos Gamificada (Java + DDD)

O **Learn XP** é um sistema acadêmico desenvolvido como projeto universitário, com o objetivo de simular uma plataforma de estudos onde usuários evoluem por meio de XP, desbloqueiam novos cursos conforme seu nível e têm seu progresso monitorado pelo sistema.

O projeto foi estruturado utilizando **Java 21**, **POO**, **DDD (Domain-Driven Design)**, e simulação de persistência em memória via listas.

---

## 📌 Objetivos do Sistema

- Cadastro e autenticação de usuários  
- Listagem de cursos baseada no nível do usuário  
- Acesso a aulas e conclusão de conteúdo  
- Ganho de XP conforme aulas/atividades concluídas  
- Progressão automática de nível  
- Ranking global dos usuários  
- Comentários em cursos  
- Persistência simulada (sem banco de dados)  
- Menu interativo no console

---

## 🧱 Arquitetura do Projeto

O sistema segue uma arquitetura inspirada em **DDD**, separando responsabilidades:
src/
└── application/
├── ConsoleMenu.java
│── menus/
│ ├──CourseMenu.java
│ ├──RankingMenu.java
│ └── UserMenu.java
│
└── domain/
├── comment/
│ ├── entity/
│ └── repository/
│
├── course/
│ ├── entity/
│ ├── repository/
│ └── service/
│
├── ranking/
│ ├── RankingEntry.java
│ └── RankingService.java
│
└── user/
│ ├── entity/
│ ├── repository/
│ ├── service/
│ └── vo/
│
└── Main.java

---

## 📚 UML – Diagrama de Classes

O repositório inclui um **diagrama UML completo**, representando:

- User  
- Course  
- Lesson  
- Activity  
- Comment  
- UserProgress  
- Serviços e repositórios relacionados  

---

## 🗃️ ERD – Modelo Entidade-Relacionamento

A modelagem inclui:

- **users**
- **course**
- **lesson**
- **comment**
- **user_progress** (relação N:N entre usuário e aula)

---

## 🛠️ Tecnologias Utilizadas

- Java 21  
- Programação Orientada a Objetos  
- Domain-Driven Design  
- Collections Framework  
- Senhas com hash  
- Console application (CLI)  
- Clean Code / SOLID (quando aplicável)

---

## 🚀 Como Executar

### 1. Clonar o repositório
```bash
git clone https://github.com/Hollow-Knights/learn-xp.git
```

### 2. Compilar o projeto
```bash
javac -d bin $(find src -name "*.java")
```

### 3. Executar
```bash
java -cp bin Main
```

---

## 📈 Funcionalidades Demonstradas

- Modelagem orientada ao domínio
- Regras de progressão por XP
- Níveis de usuário (iniciante, intermediário, avançado)
- Ranking global
- Sistema de comentários
- Acesso a cursos e aulas
- Estrutura modular e coesa
- Simulação de persistência
- Separação de camadas (DDD simplificado)

## 🎓 Sobre o Projeto

Este projeto foi desenvolvido para fins acadêmicos, com foco em:
- Estruturação arquitetural
- Modelagem UML e ERD
- Domínio bem definido
- Aplicação de princípios de engenharia de software
- Construção de um sistema funcional com Java puro
Serve também como portfólio e demonstração prática de conhecimento em desenvolvimento backend.

