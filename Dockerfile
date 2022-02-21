FROM node:14.17.6-buster-slim AS build

RUN apt-get update  && \
    apt-get install -y \
        python \
        g++ \
        make \
        gcc

FROM build AS install
ARG node_env
ENV NODE_ENV=${node_env}
ENV WEBPACK_CLI_SKIP_IMPORT_LOCAL=true

COPY ./package* /app/
WORKDIR /app
RUN npm ci --save-dev --production=false
COPY . ./
RUN npx webpack build \
        --progress \
        --node-env ${node_env} \
        --config webpack.config.js && \
    rm -rf node_modules

FROM node:14.17.6-buster-slim

ARG node_env
ENV NODE_ENV=${node_env}
ENV TINI_VERSION v0.18.0

COPY ./package* /app/
WORKDIR /app
RUN npm ci --production || npm ci --production
COPY . ./
COPY --from=install /app/dist/public/js/main.js /app/dist/public/js/
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "-s", "--"]

USER node

EXPOSE 3033

CMD ["npm", "run", "start"]
