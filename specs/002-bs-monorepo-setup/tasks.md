# Tasks: 构建B/S架构Monorepo模版

**Branch**: `002-bs-monorepo-setup`
**Spec**: [spec.md](./spec.md)
**Plan**: [plan.md](./plan.md)

## Phase 1: 基础架构搭建 (Infrastructure)

- [ ] **Task 1.1**: 初始化 Monorepo 仓库
  - [ ] 创建 `pnpm-workspace.yaml`
  - [ ] 配置 `.npmrc` (阿里云镜像)
  - [ ] 配置 `.vscode/settings.json` 和 `.vscode/extensions.json`
  - [ ] 创建根目录 `package.json` (包含 dev, build, cleanup 脚本占位符)
  - [ ] 配置 TypeScript 根配置 `tsconfig.base.json`

- [ ] **Task 1.2**: 搭建 Backend 基础
  - [ ] 初始化 `apps/backend`
  - [ ] 安装 Apollo Server, Pothos, Prisma, TypeScript
  - [ ] 配置 `tsconfig.json`
  - [ ] 初始化 Prisma (`prisma init`) 并配置 SQLite
  - [ ] 创建基本的 Apollo Server 入口文件

- [ ] **Task 1.3**: 搭建 Frontend 基础
  - [ ] 初始化 `apps/frontend` (Vite + Vue3 + TS)
  - [ ] 安装 Element Plus, Apollo Client, Vue Router
  - [ ] 配置 `vite.config.ts` (包含 alias 等)
  - [ ] 配置 Apollo Client 实例

## Phase 2: 数据模型与后端实现 (Backend Implementation)

- [ ] **Task 2.1**: 定义 Prisma Schema
  - [ ] 在 `apps/backend/prisma/schema.prisma` 中定义 `Student` 模型
  - [ ] 运行 `prisma migrate dev` 创建数据库表

- [ ] **Task 2.2**: 实现 GraphQL Schema (Code-First)
  - [ ] 配置 Pothos Schema Builder
  - [ ] 创建 `Student` 类型定义 (Object Type)
  - [ ] 实现 Query: `students`, `student(id)`
  - [ ] 实现 Mutation: `createStudent`, `updateStudent`, `deleteStudent`
  - [ ] 确保所有 Resolver 都有类型安全

- [ ] **Task 2.3**: 后端测试与验证
  - [ ] 启动后端服务，使用 Apollo Sandbox 验证 Schema 和 CRUD 操作

## Phase 3: 前端集成与代码生成 (Frontend Integration)

- [ ] **Task 3.1**: 配置 GraphQL Code Generator
  - [ ] 在 `apps/frontend` 中配置 `codegen.ts`
  - [ ] 设置生成目标为 `src/graphql/generated.ts` (包含 Hooks)
  - [ ] 编写前端 GraphQL Query/Mutation 文件 (`src/graphql/student.graphql`)
  - [ ] 运行生成命令验证配置

- [ ] **Task 3.2**: 实现学生列表页面
  - [ ] 创建 `StudentList.vue`
  - [ ] 使用生成的 Hook 获取数据
  - [ ] 使用 Element Plus Table 展示数据

- [ ] **Task 3.3**: 实现学生编辑/创建功能
  - [ ] 创建 `StudentForm.vue` (Dialog 或 独立页面)
  - [ ] 使用生成的 Mutation Hook 提交数据
  - [ ] 实现表单验证

## Phase 4: 工具链与清理脚本 (Tooling & Cleanup)

- [ ] **Task 4.1**: 实现清理脚本
  - [ ] 创建 `scripts/cleanup-example.js`
  - [ ] 实现移除 `Student` 相关代码的逻辑 (Prisma model, Resolvers, Frontend components)
  - [ ] 确保清理后项目仍能正常运行 (保留基础架构)

- [ ] **Task 4.2**: 完善文档与配置
  - [ ] 更新根目录 `README.md` (包含快速开始指南)
  - [ ] 确保所有关键代码都有中文注释
  - [ ] 验证 `pnpm install` 和 `pnpm dev` 流程

## Phase 5: 最终验收 (Final Review)

- [ ] **Task 5.1**: 全局 Lint 与类型检查
  - [ ] 运行 `pnpm -r build` 确保无类型错误
  - [ ] 检查代码风格是否符合规范

- [ ] **Task 5.2**: 演示验证
  - [ ] 录制或截图 CRUD 操作流程
  - [ ] 验证清理脚本的有效性
