<!--
Sync Impact Report:
- Version change: 0.0.0 -> 1.0.0
- Modified principles:
  - Defined I. Localization First
  - Defined II. Core Quality Principles
  - Defined III. SOLID & Modular Design
  - Defined IV. Automated Environment
  - Defined V. Community Best Practices
  - Added VI. Domestic Mirrors
  - Added VII. B/S Architecture & Responsive Design
- Templates requiring updates: None
- Follow-up TODOs: None
-->

# xmagital-app-template Constitution

## Core Principles

### I. Localization First (本地化优先)
Software developers and users are primarily in mainland China. To facilitate Chinese users, all documentation, reasoning processes, code comments, and software interfaces MUST prioritize Simplified Chinese (zh-CN).

### II. Core Quality Principles (核心原则)
Code quality, testability, user experience, and performance are the core principles. These are non-negotiable and must be prioritized in every decision.

### III. SOLID & Modular Design (SOLID与模块化)
Follow SOLID principles. Use modular design with clear interface design documents and code comments. Interfaces must be well-defined and documented before implementation.

### IV. Automated Environment (自动化环境)
Development environment and tools MUST be automatically installed and configured. The impact scope should be kept within the workspace as much as possible (e.g., using local config, containers, or virtual envs).

### V. Community Best Practices (社区最佳实践)
Combine and follow open source community best practices. Do not reinvent the wheel if a standard, well-maintained solution exists.

### VI. Domestic Mirrors (国内镜像源)
All development dependencies and tools MUST prioritize using domestic mirror sources (e.g., Aliyun https://developer.aliyun.com/mirror/) to accelerate retrieval speed.

### VII. B/S Architecture & Responsive Design (B/S架构与响应式)
Prioritize Browser/Server (B/S) architecture. Ensure good responsive design to support various devices and screen sizes.

## Additional Constraints

All dependencies must be pinned to specific versions to ensure reproducibility. Security vulnerabilities in dependencies must be addressed immediately.

## Development Workflow

Code reviews are mandatory. All PRs must pass automated tests. Documentation must be updated with code changes.

## Governance

Constitution supersedes all other practices. Amendments require documentation and approval. All PRs/reviews must verify compliance.

**Version**: 1.0.0 | **Ratified**: 2025-11-28 | **Last Amended**: 2025-11-28
