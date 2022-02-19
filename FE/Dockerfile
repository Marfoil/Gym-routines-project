FROM node:12-alpine AS BUILD_IMAGE

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./

# install dependencies
RUN yarn --production=true

COPY . .

# lint & test
# RUN yarn lint & yarn test

# build application
RUN yarn build

FROM node:12-alpine

WORKDIR /usr/src/app

# copy from build image
COPY --from=BUILD_IMAGE /usr/src/app/dist ./dist
COPY --from=BUILD_IMAGE /usr/src/app/node_modules ./node_modules

EXPOSE 8080

CMD [ "node", "./dist/server.js" ]