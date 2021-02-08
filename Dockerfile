FROM node:14.15.4-alpine3.12

ENV NODE_ENV production

COPY . /usr/src/app
WORKDIR /usr/src/app
RUN yarn install --force \
 && yarn link \
 && yarn cache clean

ENTRYPOINT [ "/usr/local/bin/manuel" ]
