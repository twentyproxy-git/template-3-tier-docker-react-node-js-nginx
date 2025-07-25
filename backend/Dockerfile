FROM node:20-alpine AS base

WORKDIR /usr/src/app 

COPY package*.json ./

# =====================
# Development stage
# =====================

FROM base AS dev

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

# =====================
# Production stage
# =====================

FROM base AS prod

RUN --mount=type=cache,target=/usr/src/app/.npm \
    npm set cache /usr/src/app/.npm && \
    npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]