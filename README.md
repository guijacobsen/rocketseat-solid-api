## SOLID API

Serviço REST em node seguindo príncipios do SOLID.

Desenvolvimento acompanhando o vídeo da Rocketseat [Princípios SOLID em uma API REST com Node.js e TypeScript | Code/Drops #44](https://www.youtube.com/watch?v=vAV4Vy4jfkc)

#

### S - Single Responsability Principle

- Cada arquivo/classe (coisa) faz uma coisa

### O - Open/Closed Principle

- Classes abertas para extensao, mas não para edição
- Herda, mas não sobrescreve/modifica

### L - Liskov Substitution Principle

- Utilização de "drivers" diferentes
- Conectar diferentes bancos/serviços sem alterar a regra de negócio

### I - Interface Segragation Principle

- Não criar interfaces robustas, criar interfaces menores
- Tipagens menores

### D - Dependency Inversion Principle

- As classes não devem depender de implementações e sim de abstrações
