# Stage1: UI Build
FROM node:20-slim AS frontend-build
WORKDIR /usr/src
COPY frontend/ ./frontend/
RUN cd frontend && npm install && npm run build

# Stage2: backend Build
FROM node:20-slim AS backend-build
WORKDIR /usr/src
COPY backend/ ./backend/
RUN cd backend && npm install && ENVIRONMENT=production npm run build
RUN ls

# Stage3: Packaging the app
FROM node:20-slim
WORKDIR /root/
COPY --from=frontend-build /usr/src/frontend/build ./frontend/build
COPY --from=backend-build /usr/src/backend/build .
RUN ls

EXPOSE 80

CMD ["node", "api.bundle.js"]
