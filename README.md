# LaraChatWeb

SPA frontend do projeto **LaraChat** — aplicação de chat em tempo real com arquitetura desacoplada.

## Repositórios

| Projeto | Descrição |
|---|---|
| [`LaraChatServer`](../LaraChatServer) | API REST — Laravel 12 + JWT |
| `LaraChatWeb` (este) | SPA Frontend — Vue 3 + Vite |

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Vue 3 |
| Build | Vite 6 |
| Estilo | Tailwind CSS 4 |
| Roteamento | Vue Router 4 |
| Estado global | Pinia 2 |
| HTTP | Axios |

## Estrutura

```
src/
├── router/         # Definição de rotas (Vue Router)
├── services/       # Camada de comunicação com a API (Axios)
├── stores/         # Estado global (Pinia)
├── views/          # Páginas/telas da aplicação
│   ├── auth/       # Login, registro
│   └── Dashboard.vue
├── App.vue
└── main.js
```

## Pré-requisitos

- Node 20+
- API `LaraChatServer` rodando em `http://localhost:8000`

## Instalação

```bash
git clone <url-larachat-web> LaraChatWeb
cd LaraChatWeb
cp .env.example .env
npm install
npm run dev
```

A SPA ficará disponível em **http://localhost:3000**.

## Docker (desenvolvimento)

O frontend é containerizado junto com o backend via `docker-compose.yml` do `LaraChatServer`:

```bash
cd ../LaraChatServer
docker compose up -d --build
```

Para subir apenas o frontend isoladamente:

```bash
docker build -f Dockerfile.dev -t larachat-web .
docker run -p 3000:3000 -v $(pwd):/app larachat-web
```

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento (HMR) |
| `npm run build` | Build de produção |
| `npm run preview` | Preview do build de produção |

## Variáveis de ambiente

| Variável | Descrição |
|---|---|
| `VITE_API_URL` | URL base da API Laravel (ex: `http://localhost:8000`) |

## Serviços relacionados

| Serviço | URL |
|---|---|
| SPA (dev) | http://localhost:3000 |
| API Laravel | http://localhost:8000 |
| WebSocket (Reverb) | ws://localhost:8080 |

## Licença

MIT
