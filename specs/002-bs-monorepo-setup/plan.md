# Implementation Plan: 构建B/S架构Monorepo模版

**Branch**: `002-bs-monorepo-setup` | **Date**: 2025-11-28 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/002-bs-monorepo-setup/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

构建一个基于 B/S 架构的 Monorepo 模版，包含 Vue3 前端和 Node.js (Apollo Server) 后端，使用 GraphQL 进行通信。模版将包含一个完整的学生信息 CRUD 示例，展示高质量的代码实践（Code-First Schema, 自动化类型生成, Prisma ORM），并提供一键清理脚本以便开发者快速开始新项目。

## Technical Context

**Language/Version**: TypeScript 5.x, Node.js 22+ (后端), Node.js 22.10+ (前端)
**Primary Dependencies**: 
- **Frontend**: Vue 3, Vite, Element Plus, Apollo Client, GraphQL Code Generator, Echarts, Three.js
- **Backend**: Apollo Server, Pothos (Code-First GraphQL), Prisma, Express (可选包装器)
- **Tools**: Pnpm (Workspace), 阿里镜像源
**Storage**: SQLite (开发环境), PostgreSQL (生产环境)
**Testing**: Vitest (单元/集成测试), Playwright (E2E - 可选但推荐)
**Target Platform**: Web 浏览器 (响应式), Linux/Docker 容器 (后端)
**Project Type**: Monorepo (Web 应用 + 后端服务)
**Performance Goals**: `pnpm install` < 5分钟 (国内网络), 开发服务器启动 < 30秒
**Constraints**: 严格 TypeScript (禁止 any), 核心逻辑 100% 注释覆盖率, SOLID 原则
**Scale/Scope**: 模版项目，可扩展至大型应用

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **I. 本地化优先**: 所有文档和注释使用简体中文。
- [x] **II. 核心质量原则**: 高质量示例代码，严格的 Lint 检查。
- [x] **III. SOLID 与模块化设计**: Code-First GraphQL, 模块化结构。
- [x] **IV. 自动化环境**: VS Code + 本地脚本自动化。
- [x] **V. 社区最佳实践**: 标准 pnpm workspace, Vue3/Vite 标准栈。
- [x] **VI. 国内镜像源**: 必须配置阿里云镜像源。
- [x] **VII. B/S 架构**: 实现浏览器/服务器架构。
- [x] **VIII. 开源协议合规**: 所有依赖优先选择 MIT/Apache 协议。

## Project Structure

### Documentation (this feature)

```text
specs/002-bs-monorepo-setup/
├── plan.md              # 本文件
├── research.md          # Phase 0 输出
├── data-model.md        # Phase 1 输出
├── quickstart.md        # Phase 1 输出
├── contracts/           # Phase 1 输出 (GraphQL Schema)
└── tasks.md             # Phase 2 输出
```

### Source Code (repository root)

```text
pnpm-workspace.yaml      # Workspace 配置
package.json             # 根目录脚本 (install, dev, cleanup)
.npmrc                   # 阿里镜像源配置
.vscode/                 # VS Code 设置 & 插件
  ├── settings.json
  └── extensions.json

apps/
├── backend/             # Node.js GraphQL 服务端
│   ├── src/
│   │   ├── schema/      # Pothos Schema 构建器
│   │   ├── models/      # Prisma Client & 业务逻辑
│   │   ├── resolvers/   # GraphQL Resolvers
│   │   └── server.ts    # 入口文件
│   ├── prisma/
│   │   └── schema.prisma
│   └── package.json
│
└── frontend/            # Vue3 应用程序
    ├── src/
    │   ├── components/
    │   ├── graphql/     # 生成的 hooks & 操作
    │   ├── views/
    │   └── main.ts
    ├── codegen.ts       # GraphQL Code Generator 配置
    └── package.json

scripts/
└── cleanup-example.js   # 移除学生示例代码的脚本
```

**Structure Decision**: 标准 Pnpm Workspace，使用 `apps/` 目录存放前后端应用。共享逻辑（如果未来有）可以放入 `packages/`。

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | | |
