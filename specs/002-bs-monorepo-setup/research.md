# Research: 构建B/S架构Monorepo模版

**Feature**: 002-bs-monorepo-setup
**Date**: 2025-11-28

## 1. Monorepo 工具链选择

- **Decision**: 使用 **pnpm workspace**。
- **Rationale**: 
  - pnpm 是目前最高效的包管理器，节省磁盘空间，安装速度快（符合性能原则）。
  - 原生支持 workspace，配置简单（符合自动化原则）。
  - 社区支持广泛，Vue 和 Vite 生态首选。
- **Alternatives**:
  - *Lerna/Nx/Turborepo*: 功能更强大但配置复杂，对于模版项目可能过度设计。pnpm workspace 足够轻量且能满足需求。

## 2. GraphQL Schema 定义模式

- **Decision**: **Code-First** (使用 Pothos)。
- **Rationale**:
  - **类型安全**: Pothos 利用 TypeScript 类型推断，减少手动编写类型定义，避免 Schema 与代码不一致。
  - **开发体验**: 代码即文档，重构方便。
  - **Prisma 集成**: Pothos 有优秀的 Prisma 插件，能自动生成关联字段的 resolver，极大提高开发效率。
- **Alternatives**:
  - *Schema-First*: 需要维护 `.graphql` 文件，并使用 codegen 生成后端类型。容易出现实现与定义不同步的问题。
  - *TypeGraphQL*: 依赖装饰器，对 TypeScript 配置有特定要求，且运行时性能略低于 Pothos。

## 3. 前端 GraphQL 客户端

- **Decision**: **Apollo Client** + **GraphQL Code Generator**。
- **Rationale**:
  - **Apollo Client**: 行业标准，功能最全（缓存、状态管理），Vue 集成 (`@vue/apollo-composable`) 成熟。
  - **Codegen**: 自动生成 Vue Composition API Hooks (e.g., `useStudentQuery`)，提供极致的类型安全开发体验。
- **Alternatives**:
  - *Urql*: 更轻量，但生态和文档不如 Apollo 丰富。
  - *Fetch/Axios*: 手动处理 GraphQL 请求繁琐，无缓存管理。

## 4. 数据库与 ORM

- **Decision**: **Prisma** + **SQLite (Dev) / PostgreSQL (Prod)**。
- **Rationale**:
  - **Prisma**: 现代 TypeScript ORM 的首选，类型安全，Schema 定义清晰，迁移工具强大。
  - **SQLite**: 无需安装额外服务即可启动，非常适合模版项目的快速上手（符合自动化原则）。
  - **PostgreSQL**: 生产环境标准选择，Prisma 切换数据库只需更改配置。

## 5. 自动化与清理脚本

- **Decision**: 使用 Node.js 脚本 (`scripts/cleanup-example.js`)。
- **Rationale**:
  - 跨平台兼容性好（Windows/Mac/Linux）。
  - 可以直接利用项目中的依赖（如 fs-extra, chalk）编写交互式脚本。
  - 易于维护和扩展。

## 6. 镜像源配置

- **Decision**: 项目根目录 `.npmrc` 强制指定。
- **Rationale**:
  - 确保所有开发者（无论本地配置如何）都使用阿里镜像源，保证安装速度和成功率（符合本地化优先原则）。
  - 配置内容：`registry=https://registry.npmmirror.com/`

## 7. 待解决问题 (Resolved)

- *Q: 如何确保清理脚本不误删？*
  - A: 脚本将硬编码特定路径（如 `apps/backend/src/models/Student.ts`），并先进行文件存在性检查。
- *Q: 前后端端口冲突？*
  - A: 后端固定 4000，前端 Vite 默认 5173，并在 `vite.config.ts` 中配置代理解决跨域。
