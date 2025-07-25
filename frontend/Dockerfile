FROM node:20-alpine AS base

WORKDIR /usr/src/app

COPY package*.json ./

# =====================
# Development stage
# =====================

FROM base AS dev

RUN --mount=type=cache,target=/usr/src/app/.npm \
    npm set cache /usr/src/app/.npm && \
    npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]

# =====================
# Build Stage (Production Build)
# =====================

FROM base AS build

RUN --mount=type=cache,target=/usr/src/app/.npm \
    npm set cache /usr/src/app/.npm && \
    npm ci 

COPY . .

RUN npm run build

# =====================
# Production Stage (Serve with Nginx)
# =====================

FROM nginx:alpine AS prod

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]