# Quickstart: B/S Monorepo 模版

**Feature**: 002-bs-monorepo-setup
**Date**: 2025-11-28

## 1. 环境准备

确保本地已安装以下工具：
- **Node.js**: v22.10+ (推荐使用 nvm 管理)
- **Pnpm**: v9+ (`npm install -g pnpm`)
- **VS Code**: 推荐编辑器，并安装推荐插件

## 2. 安装依赖

项目已配置阿里镜像源，直接运行：

```bash
pnpm install
```

## 3. 启动开发环境

一键启动前后端服务：

```bash
pnpm dev
```

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:4000/graphql

## 4. 数据库操作

开发环境使用 SQLite，数据文件位于 `apps/backend/prisma/dev.db`。

```bash
# 查看数据库 GUI
pnpm db:studio

# 执行迁移
pnpm db:migrate
```

## 5. 移除示例代码

如果你想开始一个全新的项目，可以移除学生信息示例：

```bash
pnpm cleanup:example
```

> **注意**: 此操作不可逆，建议先提交代码。

## 6. 常见问题

- **Q: 依赖安装失败？**
  - A: 检查 `.npmrc` 是否生效，或尝试 `pnpm install --force`。
- **Q: 类型报错？**
  - A: 运行 `pnpm codegen` 重新生成 GraphQL 类型定义。
