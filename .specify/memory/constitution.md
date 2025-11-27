<!--
Sync Impact Report:
- Version change: New File -> 1.0.0
- List of modified principles:
  - Added: I. 本地化优先 (Localization First)
  - Added: II. 核心质量原则 (Core Quality Principles)
  - Added: III. 技术栈与架构 (Tech Stack & Architecture)
  - Added: IV. 开发环境与工具 (Dev Environment & Tools)
  - Added: V. 社区最佳实践 (Community Best Practices)
- Added sections:
  - 详细技术规范 (Detailed Technical Specifications)
  - 工作流与合规 (Workflow & Compliance)
- Templates requiring updates: None (Templates are generic)
- Follow-up TODOs: None
-->

# xmagital-app-template Constitution

## Core Principles

### I. 本地化优先 (Localization First)

鉴于目标用户和开发者主要在中国大陆，所有文档、推理过程、代码注释、软件界面等必须优先使用简体中文（zh-CN）。这包括但不限于：README、API 文档、Git 提交信息、代码中的注释以及用户可见的所有 UI 元素。

### II. 核心质量原则 (Core Quality Principles)

代码质量、可测试性、用户体验和性能是项目的核心支柱。

- **代码质量**：必须遵循 SOLID 原则，保持代码整洁、可读。
- **可测试性**：代码设计必须易于测试，核心逻辑必须有单元测试覆盖。
- **用户体验**：界面设计应直观、响应迅速，符合目标用户习惯。
- **性能**：在设计和实现阶段必须考虑性能影响，避免不必要的资源消耗。

### III. 技术栈与架构 (Tech Stack & Architecture)

优先采用 B/S (Browser/Server) 架构。
技术栈锁定为：

- **后端/工具**: Node.js 22+
- **前端**: Vue 3
- **数据/AI**: Python 3.13+
- **数据库**: SQLite

必须使用模块化设计，并提供清晰的接口设计文档和代码注释。

### IV. 开发环境与工具 (Dev Environment & Tools)

开发环境和工具必须支持自动安装和配置，且影响范围严格限制在当前工作空间（Workspace）内，避免污染全局环境。
所有依赖包和工具拉取必须配置国内镜像源（如阿里云镜像 <https://developer.aliyun.com/mirror/>）以确保速度。

### V. 社区最佳实践 (Community Best Practices)

积极采纳开源社区的最佳实践，保持代码的现代性、可维护性和开放性。定期回顾并引入社区验证过的优秀模式和工具。

## 详细技术规范 (Detailed Technical Specifications)

### 前端规范

- 使用 Vue 3 Composition API。
- 推荐使用 TypeScript 以增强类型安全。
- UI 组件库应选择社区活跃度高且支持中文良好的库（如 Element Plus, Ant Design Vue）。

### 后端规范

- Node.js 代码应充分利用异步编程模型 (async/await)。
- Python 代码应遵循 PEP 8 规范，并使用类型提示 (Type Hints)。
- 接口设计应遵循 RESTful 或 GraphQL 规范，并提供 Swagger/OpenAPI 文档。

### 数据库规范

- SQLite 数据库操作必须使用参数化查询，严禁拼接 SQL 字符串以防止注入攻击。
- 数据库文件应存放在项目指定的数据目录下，便于管理和备份。

## 工作流与合规 (Workflow & Compliance)

### 开发流程

1. **需求分析**：明确需求，编写或更新相关文档（中文）。
2. **环境准备**：确保使用自动配置的开发环境。
3. **编码**：遵循 SOLID 原则和模块化设计，编写中文注释。
4. **测试**：编写并通过单元测试和集成测试。
5. **提交**：Git 提交信息使用中文，清晰描述变更内容。

### 审查标准

- 代码审查（Code Review）必须检查是否符合中文注释和文档要求。
- 必须检查是否引入了未配置国内镜像源的依赖。
- 必须验证新功能是否包含对应的测试用例。

## Governance

本宪章是项目的最高指导原则。

- **修订流程**：任何对原则的修改必须经过团队讨论，并以 Pull Request 的形式提交对本文件的修改。
- **版本控制**：版本号遵循语义化版本控制 (Semantic Versioning)。
  - MAJOR: 原则性的变更或不兼容的修改。
  - MINOR: 新增原则或重要的补充说明。
  - PATCH: 措辞调整或勘误。
- **合规性**：所有 Pull Request 必须符合本宪章定义的原则。在代码审查中，违反宪章的代码将不予合并。

**Version**: 1.0.0 | **Ratified**: 2025-11-27 | **Last Amended**: 2025-11-27
