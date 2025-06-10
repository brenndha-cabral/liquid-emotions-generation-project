# 🏺🔮 Liquid Emotions Generation Project 🔮🏺

Uma aplicação de terminal que simula a criação e manipulação de poções emocionais, desenvolvida com foco em **aprendizado prático de TypeScript** e **programação orientada a objetos (POO)**.

---

## 🔧 Tecnologias e Conceitos Utilizados

- Node.js + TypeScript
- Paradigma de Orientação a Objetos (POO)
- Modularização de Código
- Entrada de dados com `readline-sync`
- Execução e compilação com `tsc`

---

## 📚 Aprendizados Aplicados

- Criação de classes e métodos
- Estruturação com responsabilidades separadas
- Manipulação de dados em arrays como "banco" em memória
- Uso de interfaces para tipagem forte
- Organização modular escalável

---

## 🚀 Funcionalidades

- 📌 Cadastro de nova poção emocional
- 📋 Listagem de todas as poções registradas
- 🔎 Busca por poção usando ID único
- ❌ Validações de dados de entrada (intensidade, ingredientes, nome)
- 🔁 Menu interativo no terminal

---

## 🧠 Regras de Negócio

- Cada poção possui um ID único, nome, emoção, ingredientes e intensidade emocional
- O ID é gerado automaticamente de forma aleatória
- As poções são armazenadas em um array compartilhado entre os módulos
- A entrada de dados ocorre via prompts do terminal

---

## 🔍 Decisões Técnicas

- Uso de funções criadas para reuso de código
- Separação de responsabilidades para facilitar manutenção e escalabilidade
- Persistência temporária em memória usando `listPotions: Array<Potion>`, simulando um "banco de dados".
- O projeto possui regras estritas de ESLint (Airbnb) para JavaScript onde é possível encontrar e corrigir problemas, seguindo boas práticas e padronização.



---

## 📁 Estrutura do Projeto

```plaintext
📁 liquid-emotions-generation-project
├── 📁 src
│   ├── 📁 controller
│   │   ├── 📄 PotionController.ts
│   ├── 📁 models
│   │   ├── 📄 Potion.ts
│   │   ├── 📄 ChaosPotion.ts
│   │   ├── 📄 CouragePotion.ts
│   │   ├── 📄 LovePotion.ts
│   │   ├── 📄 MelancholyPotion.ts
│   │   ├── 📄 TimeDistortionPotion.ts
│   ├── 📁 repository
│   │   └── 📄 IPotionRepository.ts
│   ├── 📁 utils
│   │   └── 📄 loadAllPotions.ts
│   │   └── 📄 dataTypesPotions.ts
│   │   └── 📄 dataMenu.ts
│   └── 📄 Menu.ts
├── 📄 Index.ts
├── 📄 .gitignore
├── 📄 package-lock.json
├── 📄 package.json
└── 📄 README.md
├── 📄 tsconfig.json
```

## 🛠️ Como executar na sua máquina

1. **Clone o repositório:**

```bash
git clone https://github.com/brenndha-cabral/liquid-emotions-generation-project.git
````

2. **Acesse a pasta do projeto:**

```bash
cd liquid-emotions-generation-project
```

3. **Instale as dependências:**

```bash
npm install
```

4. **Execute o projeto:**

```bash
ts-node index.ts
```
---

## 📌 Sobre

Feito com dedicação por [Brenndha Cabral](https://www.linkedin.com/in/brenndhacabral/) durante o bootcamp da Generation Brasil.  
Este espaço é onde pratico, erro, corrijo e aprendo 💪✨

