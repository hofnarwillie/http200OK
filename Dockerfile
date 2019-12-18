FROM node:alpine

WORKDIR /opt/workdir
COPY . /opt/workdir

EXPOSE 80

CMD npm start
