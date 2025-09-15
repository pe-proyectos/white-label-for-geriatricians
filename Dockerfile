FROM oven/bun:canary-debian as base
WORKDIR /app

FROM base AS install
USER root

COPY ./package.json ./bun.lockb ./astro.config.mjs ./tailwind.config.js ./tsconfig.json ./
COPY ./src ./src
COPY ./public ./public

# Install dependencies
RUN bun install

FROM base AS release
USER root

COPY --from=install /app/ .
ENV HOST=0.0.0.0
ENV PORT=4325
EXPOSE 4325

CMD bunx --bun astro build && bun run ./dist/server/entry.mjs
