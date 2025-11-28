# xmagital-app-template

xmagital 应用开发模版 (B/S Monorepo)

## 技术栈

- **Runtime**: Node.js (>= 24.11.0)
- **Backend**: Node.js, Apollo Server, Pothos, Prisma, SQLite
- **Frontend**: Vue 3, Vite, Element Plus, Apollo Client, GraphQL Code Generator

## 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 初始化数据库

```bash
cd apps/backend
pnpm prisma migrate dev
```

### 3. 启动开发环境

**后端**:

```bash
cd apps/backend
pnpm dev
```

(运行在 http://localhost:4000)

**前端**:

```bash
cd apps/frontend
pnpm dev
```

(运行在 http://localhost:3000)

## 功能特性

- **学生管理 (CRUD)**:
  - 列表展示
  - 添加学生
  - 编辑学生
  - 删除学生
- **国际化**: 全中文界面
- **类型安全**: 前后端端到端类型安全 (GraphQL Codegen)

## 生产环境部署 (Production Deployment)

本模版默认在开发环境使用 SQLite，在生产环境推荐使用 PostgreSQL。

### 1. 切换数据库 (SQLite -> PostgreSQL)

1.  修改 `apps/backend/prisma/schema.prisma`:
    ```prisma
    datasource db {
      provider = "postgresql" // 将 sqlite 改为 postgresql
      url      = env("DATABASE_URL")
    }
    ```
2.  删除旧的迁移文件:
    ```bash
    rm -rf apps/backend/prisma/migrations
    ```
3.  配置环境变量 `.env`:
    ```env
    DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
    ```
4.  重新生成迁移文件:
    ```bash
    cd apps/backend
    pnpm prisma migrate dev --name init_postgres
    ```

### 2. 构建与运行

**使用 Docker 构建后端**:

```bash
docker build -t xmagital-backend -f apps/backend/Dockerfile .
docker run -p 4000:4000 -e DATABASE_URL="postgresql://..." xmagital-backend
```

**手动构建**:

```bash
# 构建后端
cd apps/backend
pnpm build

# 构建前端
cd apps/frontend
pnpm build
```
