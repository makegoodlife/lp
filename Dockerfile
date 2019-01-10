FROM node:carbon

# Create app directory
WORKDIR /usr/serverless-lp

RUN npm i -g npm@5.6.0
RUN npm i -g serverless
