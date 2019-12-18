FROM node:alpine

WORKDIR /opt/workdir
COPY . /opt/workdir

CMD npm start
