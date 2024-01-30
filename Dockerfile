FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY . .
RUN npm i -g @nestjs/cli
RUN npm ci --production --silent && mv node_modules ../
RUN chown -R node /usr/src/app
EXPOSE 3000
USER node
CMD ["npm", "run", "start:dev"]