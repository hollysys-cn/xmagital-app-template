# Backend Dockerfile
FROM node:24-alpine AS builder

WORKDIR /app

# Enable pnpm
RUN corepack enable

# Copy workspace config
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY apps/backend/package.json ./apps/backend/
COPY apps/frontend/package.json ./apps/frontend/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY apps/backend ./apps/backend
COPY apps/frontend ./apps/frontend

# Generate Prisma Client
WORKDIR /app/apps/backend
RUN pnpm prisma generate

# Build backend
RUN pnpm build

# Production stage
FROM node:24-alpine AS runner

WORKDIR /app

# Enable pnpm
RUN corepack enable

COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/pnpm-workspace.yaml ./

# Copy backend built artifacts
COPY --from=builder /app/apps/backend/package.json ./apps/backend/
COPY --from=builder /app/apps/backend/dist ./apps/backend/dist
COPY --from=builder /app/apps/backend/prisma ./apps/backend/prisma

# Install production dependencies only
RUN pnpm install --prod --frozen-lockfile

WORKDIR /app/apps/backend

EXPOSE 4000

CMD ["pnpm", "start"]
