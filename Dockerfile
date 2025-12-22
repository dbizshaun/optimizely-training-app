# Stage 1 : Add Dependencies
FROM cratlascmnun001.azurecr.io/alpine3.21node20.18.3:v1.0.0 AS deps

USER root

RUN apk add --no-cache libc6-compat
WORKDIR /app

RUN corepack enable
RUN corepack prepare yarn@4.9.2 --activate

COPY package.json yarn.lock* ./
COPY .yarnrc.yml* ./
COPY .yarn ./.yarn
COPY packages ./packages

RUN yarn install

# Stage 2 : Build Application
FROM cratlascmnun001.azurecr.io/alpine3.21node20.18.3:v1.0.0 AS builder
USER root
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/.yarn ./.yarn
COPY --from=deps /app/.yarnrc.yml* ./

COPY . .

# Set environment variables for build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# build Optimizely App
#RUN yarn compile
RUN yarn build
#RUN yarn webhook:create

# Stage 3 : Run Application
FROM cratlascmnun001.azurecr.io/alpine3.21node20.18.3:v1.0.0 AS runner
USER root
WORKDIR /app

# Set environment variables for runner
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# create local user
RUN addgroup --system  --gid 1001 nodegroup
RUN adduser --system --uid 1001 nodeuser

COPY --from=builder /app/.next/standalone .
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

RUN chown -R nodeuser:nodegroup /app
USER nodeuser

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the application
CMD ["node", "server.js"]
