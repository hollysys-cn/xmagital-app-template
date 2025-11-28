<!--
Sync Impact Report:
- Version change: 1.0.1 -> 1.1.0
- Modified principles:
  - Added VIII. Open Source License Compliance
- Templates requiring updates: None
- Follow-up TODOs: None
-->

# xmagital-app-template 章程

## 核心原则

### I. 本地化优先 (Localization First)
软件开发者和使用者主要面向中国大陆。为方便中文用户，所有的文档、推理过程、代码注释、软件界面等必须优先使用简体中文 (zh-CN)。

### II. 核心质量原则 (Core Quality Principles)
代码质量、可测试性、用户体验和性能是核心原则。这些是不可协商的，必须在每一个决策中优先考虑。

### III. SOLID 与模块化设计 (SOLID & Modular Design)
遵循 SOLID 原则。使用模块化设计，并提供清晰的接口设计文档和代码注释。接口必须在实现之前定义清晰并编写文档。

### IV. 自动化环境 (Automated Environment)
开发环境和工具必须自动安装和配置。影响范围应尽量保持在工作空间范围内（例如，使用本地配置、容器或虚拟环境）。

### V. 社区最佳实践 (Community Best Practices)
结合并遵循开源社区最佳实践。如果存在标准的、维护良好的解决方案，不要重复造轮子。

### VI. 国内镜像源 (Domestic Mirrors)
所有开发依赖包和工具必须优先使用国内镜像源（如阿里云 https://developer.aliyun.com/mirror/）以加快拉取速度。

### VII. B/S 架构与响应式设计 (B/S Architecture & Responsive Design)
优先使用浏览器/服务器 (B/S) 架构。确保良好的响应式设计以支持各种设备和屏幕尺寸。

### VIII. 开源协议合规 (Open Source License Compliance)
第三方依赖包要求开源且商业友好。优先选择 MIT、Apache 开源协议。使用其他协议的依赖包需要人工确认核准。

## 附加约束

所有依赖项必须锁定到特定版本以确保可复现性。依赖项中的安全漏洞必须立即解决。

## 开发工作流

代码审查是强制性的。所有 PR 必须通过自动化测试。文档必须随代码变更同步更新。

## 治理

本章程取代所有其他实践。修订需要文档记录和批准。所有 PR/审查必须验证合规性。

**版本**: 1.1.0 | **批准日期**: 2025-11-28 | **最后修订**: 2025-11-28
