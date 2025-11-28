# Feature Specification: 构建B/S架构Monorepo模版 (Vue3+GraphQL+Node.js)

**Feature Branch**: `002-bs-monorepo-setup`  
**Created**: 2025-11-28  
**Status**: Draft  
**Input**: User description: "构建一个mono仓库，使用B/S架构，前后端通信使用GraphQL规范，包含前后端代码和详细文档...包含一份增删查改的示例代码...提供删除示例代码的脚本..."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - 开发者初始化项目 (Priority: P1)

开发者下载模版后，能够快速安装依赖并启动开发环境，验证模版可用性。

**Why this priority**: 这是模版的最基本功能，确保开发者可以开始工作。

**Independent Test**: 在新克隆的仓库中运行安装和启动命令，前后端服务均正常启动，浏览器能访问页面。

**Acceptance Scenarios**:

1. **Given** 刚克隆的代码仓库, **When** 运行 `pnpm install` (配置了阿里镜像源), **Then** 所有依赖在合理时间内下载完成，无报错。
2. **Given** 安装好依赖的环境, **When** 运行 `pnpm dev`, **Then** 后端服务启动在指定端口，前端服务启动并自动打开浏览器，显示欢迎页面或示例页面。

---

### User Story 2 - 学生信息增删查改示例 (Priority: P1)

开发者可以通过**高质量的**示例代码了解前后端交互方式（GraphQL）、数据库操作（Prisma）以及前端展示（Element Plus）。该示例代码将作为项目开发的最佳实践范本。

**Why this priority**: 提供直观且高标准的代码参考，帮助开发者快速上手技术栈并建立正确的开发规范。

**Independent Test**: 在浏览器中操作学生管理页面，验证数据在数据库中正确持久化；同时审查代码结构和质量。

**Acceptance Scenarios**:

1. **Given** 启动的开发环境, **When** 在前端页面点击“添加学生”并填写信息提交, **Then** 列表中出现新学生，且数据库中查询到该记录。
2. **Given** 存在的学生记录, **When** 点击“编辑”修改信息并保存, **Then** 列表和数据库中信息更新。
3. **Given** 存在的学生记录, **When** 点击“删除”, **Then** 列表和数据库中该记录消失。
4. **Given** 启动的开发环境, **When** 刷新页面, **Then** 学生列表从后端重新加载显示。

---

### User Story 3 - 移除示例代码 (Priority: P2)

开发者在熟悉模版后，可以通过脚本一键移除学生示例代码，获得一个干净的开发起点。

**Why this priority**: 提高模版易用性，避免开发者手动删除示例代码的繁琐和风险。

**Independent Test**: 运行清理脚本后，项目仍能正常编译和启动，但学生相关功能消失。

**Acceptance Scenarios**:

1. **Given** 包含示例代码的项目, **When** 运行清理脚本 (e.g., `npm run cleanup:example`), **Then** 学生相关的 Model、Resolver、Frontend Component 被删除。
2. **Given** 运行过清理脚本的项目, **When** 运行 `pnpm dev`, **Then** 项目正常启动，无编译错误，前端不再显示学生管理入口。

### Edge Cases

- **网络受限**: 必须确保 npm/pnpm 配置了阿里镜像源，否则安装可能超时。
- **数据库未初始化**: 启动时应检查数据库状态，提示或自动运行 migration。
- **清理脚本重复运行**: 脚本应具有幂等性或在找不到文件时优雅退出，不报错。

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: 项目必须采用 Monorepo 结构 (推荐 pnpm workspace)，至少包含 `apps/frontend` 和 `apps/backend`。
- **FR-002**: 后端必须使用 Node.js (22+), TypeScript, Apollo Server, Prisma。
- **FR-003**: 前端必须使用 Node.js (22.10+), Vue3, Vite, TypeScript, Element-plus, Apollo Client。
- **FR-004**: 前端必须集成 Echarts 和 Three.js 依赖（即使示例未深度使用，需配置好环境）。
- **FR-005**: 前后端通信必须遵循 GraphQL 规范。
- **FR-006**: 开发环境数据库使用 SQLite，生产环境配置支持 PostgreSQL。
- **FR-007**: 必须包含 `.npmrc` 配置，指定阿里镜像源 (https://npmmirror.com/)。
- **FR-008**: 必须提供学生信息 CRUD 的完整实现（DB Schema -> Prisma Client -> GraphQL Resolver -> GraphQL Schema -> Frontend Query/Mutation -> UI Component）。
- **FR-009**: 必须提供清理脚本，用于删除 FR-008 产生的所有特定业务代码，保留基础架构。
- **FR-010**: 所有第三方依赖包必须符合开源协议合规性（MIT/Apache优先）。
- **FR-011**: 示例代码必须达到生产级质量标准，作为后续开发的参考范本。具体要求：
  - 严格的 TypeScript 类型定义（禁止使用 `any`）。
  - 完整的错误处理机制（后端异常捕获、前端错误提示）。
  - 清晰的代码注释（解释“为什么”这样做，特别是对于 GraphQL 和 Prisma 的关键配置）。
  - 遵循 SOLID 原则和模块化设计。

### Key Entities *(include if feature involves data)*

- **Student (学生)**:
  - `id`: String (NanoID)
  - `name`: String (姓名)
  - `age`: Int (年龄)
  - `gender`: String (性别)
  - `enrollmentDate`: DateTime (入学日期)
  - `createdAt`: DateTime
  - `updatedAt`: DateTime

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: `pnpm install` 在国内网络环境下（非VPN）能在 5 分钟内完成。
- **SC-002**: `pnpm dev` 命令能在 30 秒内启动前后端服务并就绪。
- **SC-003**: 清理脚本运行后，项目代码行数减少（移除示例代码），且 `pnpm build` 依然成功。
- **SC-004**: 示例页面在 Chrome 最新版中渲染无错误，响应式布局在移动端（模拟）显示正常。
- **SC-005**: 示例代码通过严格的 Lint 检查（ESLint, Prettier）且无类型错误，代码注释覆盖率关键逻辑达到 100%。
