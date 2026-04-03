# Chikitaverse API

Uma API REST desenvolvida em Go utilizando o framework Gin, projetada para integração com APIs externas (como Discord) e com suporte para deploy serverless.

## 🚀 Tecnologias Utilizadas

- **Go** (1.21+)
- **Gin Framework** - Framework web HTTP
- **Godotenv** - Gerenciamento de variáveis de ambiente

## 📋 Pré-requisitos

- Go 1.21 ou superior
- Git

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/The-Chikitaverse-Inc/Chikitaverse-API.git
cd Chikitaverse-API
```

2. Instale as dependências:
```bash
go mod download
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

4. Execute a aplicação:
```bash
go run main.go
```

A API estará disponível em `http://localhost:3000`

## 🐳 Deploy Tradicional

### Build da aplicação
```bash
# Compilação estática (recomendado para produção)
go build 

# Executar
./Chikitaverse-API
```

## 🔍 Exemplos de Uso

### Requisição local
```bash
curl http://localhost:3000/
# Resposta: {"test":"ok"}

curl http://localhost:3000/discord
# Resposta: Dados da API do Discord
```


## 🚨 Tratamento de Erros

A API implementa os seguintes tratamentos de erro:

- **500 Internal Server Error** - Erro ao carregar variáveis de ambiente ou ao consultar API externa
- **Panic** - Falha crítica na inicialização (ex: arquivo .env não encontrado)

### Exemplo de resposta de erro:
```json
{
  "error": "Erro ao ler resposta da API"
}
```

## 🧪 Testes

Para executar os testes (quando implementados):
```bash
go test -v ./...
```

## 📦 Dependências Principais

```go
require (
    github.com/gin-gonic/gin v1.9.1      // Framework web
    github.com/joho/godotenv v1.5.1      // Variáveis de ambiente
)
```

## 🔒 Considerações de Segurança

- Nunca commite o arquivo `.env` no repositório
- Use variáveis de ambiente da plataforma em produção
- Mantenha as dependências atualizadas (`go get -u ./...`)
- Configure CORS adequadamente em produção

## 📄 Licença

Este projeto está sob a licença GNU GENERAL PUBLIC LICENSE. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✨ Agradecimentos

- [Gin Framework](https://gin-gonic.com/)

---

**Desenvolvido com ❤️ pela equipe Chikitaverse**

**Assinado:** dvcDaniel