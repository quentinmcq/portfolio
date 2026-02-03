ARG PNPM_VERSION=10.23.0

# --- Builder stage ----------------------------------------------------------
FROM node:25.6.0-alpine AS builder

ARG PNPM_VERSION
RUN npm install -g pnpm@${PNPM_VERSION}

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --ignore-scripts

COPY . .
RUN pnpm build

# --- Production stage -------------------------------------------------------
FROM nginx:1.29-alpine AS production

ARG PORT=4173
ENV PORT=${PORT}

# Copy our nginx config and build artifacts
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE ${PORT}

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:${PORT}/ || exit 1

CMD ["/docker-entrypoint.sh", "nginx", "-g", "daemon off;"]

# --- Development stage ------------------------------------------------------
FROM node:25.6.0-alpine AS dev

ARG PNPM_VERSION
RUN apk add --no-cache libc6-compat git && npm install -g pnpm@${PNPM_VERSION}

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --ignore-scripts

COPY . .

EXPOSE 5173

CMD ["pnpm", "dev", "--host", "0.0.0.0"]
