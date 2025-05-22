# 🧠 Chikitaverse-API

API oficial do **The Chikitaverse Inc.**
Fornece endpoints protegidos para dados do Chikitaverso relacionados a **Roblox**, **Discord** e **Xadrez**.

---

## ⚙️ Tecnologias Utilizadas

* [Express.js](https://expressjs.com)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)

---

## 📦 Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/The-Chikitaverse-Inc/Chikitaverse-API
   cd Chikitaverse-API
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` com:

   ```env
   KEYACCES=sua_chave_de_acesso
   ```

4. **Inicie o servidor:**

   ```bash
   node app.js
   ```

   A API estará disponível em:
   `http://localhost:1995`

---

## 🔐 Segurança

* A API usa um **Rate Limiter** com limite de 60 requisições por minuto por IP.
* Todos os endpoints são **protegidos por chave** via header:

  ```
  key: sua_chave_de_acesso_com_env
  ```

---

## 📂 Endpoints

| Método | Rota       | Descrição                         |
| ------ | ---------- | --------------------------------- |
| GET    | `/`        | Status da API                     |
| GET    | `/roblox`  | Endpoints relacionados ao Roblox  |
| GET    | `/discord` | Funções e integrações com Discord |
| GET    | `/chess`   | Funções relacionadas a xadrez     |

*As rotas reais dentro de `/roblox`, `/discord`, `/chess` dependem da implementação dos arquivos em `./routes/`.*

---

## 🌐 Exemplo de Resposta - `/`

```json
{
  "title": "Chikitaverse API",
  "code": 200,
  "incorporated": "The Chikitaverse Inc.",
  "games": {
    "roblox": true,
    "minecraft": false,
    "chess": true
  }
}
```

---

## 🧱 Estrutura do Projeto

```
Chikitaverse-API/
├── routes/
│   ├── roblox.js
│   ├── discord.js
│   └── chess.js
├── .env
├── app.js
└── package.json
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Abra uma issue ou faça um pull request com melhorias, novas rotas ou correções.

---

## 📜 Licença

Distribuído sob a [GNU 2.0](LICENSE).

---

## 🌍 Parte do Ecossistema

Confira outros projetos do **The Chikitaverse Inc.:**

* [🌐 ChikitaverseWeb-site](https://github.com/The-Chikitaverse-Inc/ChikitaverseWeb-site)
* [🤖 ChikitaBot](https://github.com/The-Chikitaverse-Inc/ChikitaBot)

---

**Incorporation:** The Chikitaverse Inc.

**Assinado:** dvcDaniel
