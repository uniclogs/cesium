FROM node:lts-alpine3.21

ARG APP_HOST
ENV APP_HOST="cesium.uniclogs.org"

ARG APP_PORT
ENV APP_PORT=7008

ARG APP_DIR
ENV APP_DIR="/srv/cesium"

RUN adduser -h ${APP_DIR} -D cesium users

# COPY --chown=cesium:users --chmod=755 ./* ${APP_DIR}
COPY --chown=cesium:users --chmod=600 ./vite.config.js ${APP_DIR}
COPY --chown=cesium:users --chmod=600 ./package.json ${APP_DIR}
COPY --chown=cesium:users --chmod=700 ./public ${APP_DIR}/public
COPY --chown=cesium:users --chmod=700 ./src ${APP_DIR}/src

RUN npm install -g vite@latest

USER cesium
WORKDIR ${APP_DIR}

RUN npm install

EXPOSE ${APP_PORT}

CMD ["vite", "--host", "0.0.0.0", "--port", "7008"]