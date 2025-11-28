# Data Model: 构建B/S架构Monorepo模版

**Feature**: 002-bs-monorepo-setup
**Date**: 2025-11-28

## 1. Entities

### Student (学生)

用于演示 CRUD 功能的核心实体。

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `id` | String | Yes | 唯一标识符 (NanoID)，主键 |
| `name` | String | Yes | 学生姓名 |
| `age` | Int | Yes | 学生年龄 |
| `gender` | String | Yes | 性别 (MALE/FEMALE/OTHER) |
| `enrollmentDate` | DateTime | Yes | 入学日期 |
| `createdAt` | DateTime | Yes | 创建时间 (自动生成) |
| `updatedAt` | DateTime | Yes | 更新时间 (自动更新) |

## 2. Prisma Schema (Draft)

```prisma
// apps/backend/prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

generator pothos {
  provider = "prisma-pothos-types"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Student {
  id             String   @id @default(cuid()) // 使用 CUID 或 NanoID
  name           String
  age            Int
  gender         String
  enrollmentDate DateTime
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
}
```

## 3. GraphQL Schema (Draft)

```graphql
scalar DateTime

type Student {
  id: ID!
  name: String!
  age: Int!
  gender: String!
  enrollmentDate: DateTime!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type Query {
  students: [Student!]!
  student(id: ID!): Student
}

input CreateStudentInput {
  name: String!
  age: Int!
  gender: String!
  enrollmentDate: DateTime!
}

input UpdateStudentInput {
  name: String
  age: Int
  gender: String
  enrollmentDate: DateTime
}

type Mutation {
  createStudent(input: CreateStudentInput!): Student!
  updateStudent(id: ID!, input: UpdateStudentInput!): Student!
  deleteStudent(id: ID!): Student!
}
```
