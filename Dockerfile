FROM node:12.16.2-alpine
RUN mkdir /webapp
COPY webapp /webapp
CMD ["node", "/webpapp/hello.js"]