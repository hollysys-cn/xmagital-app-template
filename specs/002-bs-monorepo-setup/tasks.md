# Tasks: 构建 B/S 架构 Monorepo 模版

**Branch**: `002-bs-monorepo-setup`
**Spec**: [spec.md](./spec.md)
**Plan**: [plan.md](./plan.md)

## Phase 1: 基础架构搭建 (Infrastructure)

**目标**: 项目初始化与基础结构

- [x] T001 [P] 创建 Monorepo 工作区配置 `pnpm-workspace.yaml`
- [x] T002 [P] 配置阿里云镜像源 `.npmrc`
- [x] T003 [P] 创建根目录 `package.json` 并配置基础脚本
- [x] T004 [P] 配置 VS Code 设置 `.vscode/settings.json` 和推荐插件 `.vscode/extensions.json`
- [x] T005 [P] 创建基础 TypeScript 配置 `tsconfig.base.json`

---

## Phase 2: 核心基础 (Foundational)

**目标**: 必须在任何用户故事开始前完成的核心基础架构

**⚠️ 关键**: 在此阶段完成前，不可开始任何用户故事的开发

- [x] T006 初始化后端项目结构 `apps/backend/package.json`
- [x] T007 [P] 安装后端核心依赖 (Apollo, Pothos, Prisma)
- [x] T008 配置后端 TypeScript `apps/backend/tsconfig.json`
- [x] T009 初始化 Prisma 并配置 SQLite `apps/backend/prisma/schema.prisma`
- [x] T010 创建 Apollo Server 入口文件 `apps/backend/src/server.ts`
- [x] T011 初始化前端项目结构 `apps/frontend/package.json`
- [x] T012 [P] 安装前端核心依赖 (Vue3, Vite, Element Plus, Apollo Client)
- [x] T013 配置前端 Vite `apps/frontend/vite.config.ts`
- [x] T014 配置前端 Apollo Client `apps/frontend/src/apollo.ts`
- [x] T015 配置 Element Plus `apps/frontend/src/main.ts`

**检查点**: 基础架构就绪 - 用户故事开发现在可以并行开始

---

## Phase 3: 用户故事 1 - 开发者初始化项目 (优先级: P1) 🎯 MVP

**目标**: 确保开发者能够快速安装依赖并启动开发环境

**独立测试**: 在新克隆的仓库中运行 `pnpm install` 和 `pnpm dev`，验证服务正常启动

### 用户故事 1 的实现

- [x] T016 [US1] 配置根目录并发启动脚本 `package.json`
- [x] T017 [US1] 验证安装与启动流程 (手动验证)

**检查点**: 此时，用户故事 1 应完全可用且可独立测试

---

## Phase 4: 用户故事 2 - 学生信息增删查改示例 (优先级: P1)

**目标**: 提供高质量的 CRUD 示例代码，展示前后端交互最佳实践

**独立测试**: 在浏览器中操作学生管理页面，验证数据持久化和页面更新

### 用户故事 2 的实现

- [x] T018 [US2] 定义 Student Prisma 模型 `apps/backend/prisma/schema.prisma`
- [x] T019 [US2] 执行 Prisma Migration 生成数据库表 `apps/backend/prisma/migrations`
- [x] T020 [US2] 定义 Student Pothos 类型 `apps/backend/src/schema/student.ts`
- [x] T021 [US2] 实现 Student Query Resolvers `apps/backend/src/resolvers/student.ts`
- [x] T022 [US2] 实现 Student Mutation Resolvers `apps/backend/src/resolvers/student.ts`
- [x] T023 [US2] 注册 Schema 到 Server `apps/backend/src/schema/index.ts`
- [x] T024 [US2] 配置前端 Codegen `apps/frontend/codegen.ts`
- [x] T025 [US2] 编写前端 GraphQL 操作 `apps/frontend/src/graphql/student.graphql`
- [x] T026 [US2] 生成前端 Hooks `apps/frontend/src/graphql/generated.ts`
- [x] T027 [US2] 实现学生列表组件 `apps/frontend/src/components/StudentList.vue`
- [x] T028 [US2] 实现学生表单组件 `apps/frontend/src/components/StudentForm.vue`
- [x] T029 [US2] 集成学生管理页面 `apps/frontend/src/views/StudentView.vue`

**检查点**: 此时，用户故事 1 和 2 应都能独立工作

---

## Phase 5: 用户故事 3 - 移除示例代码 (优先级: P2)

**目标**: 提供一键清理脚本，方便开发者开始新项目

**独立测试**: 运行清理脚本后，项目仍能正常编译启动，但学生相关功能消失

### 用户故事 3 的实现

- [x] T030 [US3] 创建清理脚本 `scripts/cleanup-example.js`
- [x] T031 [US3] 在根目录 package.json 添加清理命令 `package.json`

**检查点**: 所有用户故事现在都应能独立运行

---

## Phase 6: 打磨与横切关注点

**目标**: 影响多个用户故事的改进

- [x] T032 [P] 更新项目文档 `README.md`
- [x] T033 [P] 全局类型检查与 Lint 修复

---

## 依赖关系与执行顺序

### 阶段依赖

- **Setup (Phase 1)**: 无依赖 - 可立即开始
- **Foundational (Phase 2)**: 依赖 Setup 完成 - 阻塞所有用户故事
- **User Stories (Phase 3+)**: 全部依赖 Foundational 阶段完成
- **Polish (Final Phase)**: 依赖所有预期的用户故事完成

### 用户故事依赖

- **User Story 1 (P1)**: 可在 Foundational (Phase 2) 后开始
- **User Story 2 (P1)**: 可在 Foundational (Phase 2) 后开始
- **User Story 3 (P2)**: 可在 Foundational (Phase 2) 后开始 (技术上依赖 US2 的存在才有意义，但实现是独立的脚本)

### 并行机会

- 所有标记为 [P] 的 Setup 任务可并行执行
- 所有标记为 [P] 的 Foundational 任务可并行执行
- 一旦 Foundational 阶段完成，US1 和 US2 可并行开始

---

## 并行示例: 用户故事 2

```bash
# 同时启动用户故事 2 的所有后端任务:
Task: "定义 Student Pothos 类型 apps/backend/src/schema/student.ts"
Task: "实现 Student Query Resolvers apps/backend/src/resolvers/student.ts"

# 同时启动用户故事 2 的所有前端任务:
Task: "实现学生列表组件 apps/frontend/src/components/StudentList.vue"
Task: "实现学生表单组件 apps/frontend/src/components/StudentForm.vue"
```

---

## 实施策略

### MVP 优先 (用户故事 1 & 2)

1. 完成 Phase 1: Setup
2. 完成 Phase 2: Foundational
3. 完成 Phase 3: User Story 1 (Init)
4. 完成 Phase 4: User Story 2 (CRUD Example)
5. **停止并验证**: 测试 CRUD 功能
6. 部署/演示

### 增量交付

1. 基础架构就绪
2. 增加初始化能力 (US1)
3. 增加 CRUD 示例 (US2)
4. 增加清理脚本 (US3)
