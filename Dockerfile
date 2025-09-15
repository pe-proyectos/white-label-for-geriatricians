# Use Ubuntu slim as base image
FROM ubuntu:22.04-slim

# Set environment variables
ENV DEBIAN_FRONTEND=noninteractive

# Install curl and ca-certificates
RUN apt-get update && \
    apt-get install -y curl ca-certificates && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"

# Create app directory
WORKDIR /app

# Copy package files and lock file
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build the Astro application
RUN bun run build

# Expose port 4321 (Astro's default preview port)
EXPOSE 4321

# Start the application in preview mode
CMD ["bun", "run", "preview", "--", "--host", "0.0.0.0"]
