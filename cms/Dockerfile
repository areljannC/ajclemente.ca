# After digging around on how to dockerize Sanity CLI, here's the real deal:
# https://bytemeta.vip/repo/sanity-io/sanity/issues/2674

FROM node:lts-alpine3.16

WORKDIR /usr/src/cms

COPY package*.json .

RUN npm install -g @sanity/cli
RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "start"]

