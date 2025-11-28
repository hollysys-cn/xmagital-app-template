# xmagital-app-template

xmagital 应用开发模版 (B/S Monorepo)

## 技术栈

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
