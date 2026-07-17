# Shop With Me — Context File

## Project Overview

**Shop With Me** — это статический веб-сервис для совместных покупок. Пользователи могут создавать списки покупок (todo), делиться ими и просматривать контент. Проект использует **Vike** (SSR/SSG фреймворк на базе Vite) с **React 19** и **Tailwind CSS 4**.

Приложение собирается в статические HTML-файлы (prerender) и раздаётся через **Nginx**. Сборка и деплой выполняются через **Docker Compose**.

### Ключевые технологии

- **Фреймворк:** Vike 0.4.260 + vike-react 0.6.25
- **Время выполнения:** React 19.2
- **Стили:** Tailwind CSS 4.3 (через `@tailwindcss/vite`)
- **Сборщик:** Vite 8.1
- **Язык:** TypeScript (ES2022, strict mode)
- **Сервер:** Nginx (через Docker)
- **Node:** 22 LTS (для сборки)

### Архитектура

```
app/                          # Фронтенд-приложение
├── pages/                    # Vike filesystem routing
│   ├── index/                # Главная страница (лендинг)
│   ├── todo/                 # Todo-лист
│   ├── star-wars/            # Data fetching (SWAPI)
│   ├── test/                 # Тестовая страница Tailwind
│   ├── _error/               # Кастомная 404 страница
│   ├── +config.ts            # Глобальная конфигурация Vike
│   ├── +Head.tsx             # SEO meta tags
│   ├── +Layout.tsx           # Layout с сайдбаром
│   └── ...
├── components/
├── assets/
├── vite.config.ts
├── tsconfig.json
└── package.json

nginx/
└── nginx.conf

docker-compose.yml
deploy.sh
```

### Роутинг

Vike использует **filesystem routing**: путь к файлу `+Page.tsx` определяет URL:

| Файл | URL | Описание |
|------|-----|----------|
| `pages/index/+Page.tsx` | `/` | Главная страница (лендинг) |
| `pages/todo/+Page.tsx` | `/todo` | Todo-лист |
| `pages/star-wars/index/+Page.tsx` | `/star-wars` | Список фильмов (SWAPI) |
| `pages/star-wars/@id/+Page.tsx` | `/star-wars/:id` | Детали фильма |
| `pages/test/+Page.tsx` | `/test` | Тестовая страница |
| `pages/_error/+Page.tsx` | (any) | Страница 404 / ошибок |

### Layout

- Страница `/` отображается без сайдбара (только контент).
- Все остальные страницы используют layout с вертикальным сайдбаром слева (навигация + логотип).

## Building and Running

### Локальная разработка

```bash
cd app
npm install
npm run dev          # Dev-сервер (HMR, SSR)
npm run build        # Сборка → app/dist/
npm run preview      # Сборка + превью локально
```

### Docker Compose

```bash
docker compose up build_front    # Сборка фронтенда (node:22-alpine)
docker compose up -d nginx       # Запуск Nginx
```

### Деплой

```bash
bash deploy.sh
```

Скрипт: git fetch → git reset → docker compose build_front → docker compose nginx.

## Development Conventions

- **TypeScript strict mode**, target ES2022.
- **JSX:** `react-jsx` (automatic runtime).
- **CSS:** Tailwind CSS 4 через Vite-плагин (`@tailwindcss/vite`), без `tailwind.config.js`.
- **Импорт модулей:** с расширением `.js` (требование Vite/ESM).
- **Пререндеринг:** глобально включён (`prerender: true`).
- **Тёмная тема:** `bg-gray-950`, `text-white`.
- **app/dist/** — gitignored, генерируется автоматически.

### Vike-паттерны

- `+config.ts` — глобальные настройки (title, description, prerender).
- `+data.ts` — загрузка данных для страницы.
- `+Head.tsx` — SEO meta tags.
- `+Layout.tsx` — обёртка для всех страниц.

## Deployment Infrastructure

- **GitHub Actions:** `.github/workflows/deploy.yml`
- **Nginx:** `shop-wiht-me.ru` (опечатка в домене)
- **Сеть:** Docker network `my-shared-net` (external)
