# pull the base image
FROM node:alpine
RUN mkdir -p /web
RUN chown node:node /web
USER node
WORKDIR /web

# add `/web/node_modules/.bin` to $PATH
ENV PATH /web/node_modules/.bin:$PATH

# install app dependencies
COPY --chown=node:node package.json /web/

RUN npm install

COPY --chown=node:node . /web/

EXPOSE 3000

RUN npm config set unsafe-perm true

# start app
CMD ["npm", "start"]
