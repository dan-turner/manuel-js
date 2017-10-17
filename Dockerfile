FROM node:8-alpine

ENV NODE_ENV production

COPY . /usr/src/app
WORKDIR /usr/src/app
RUN apk add --update --no-cache --virtual .build-deps \
      git g++ gcc libgcc libstdc++ linux-headers make python libgmpxx \
 && yarn install --force \
 && yarn build \
 && yarn cache clean \
 && apk del .build-deps

EXPOSE 80
CMD [ "yarn", "start" ]
