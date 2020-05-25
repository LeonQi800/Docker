FROM node:12.16.2
RUN mkdir /src
COPY hello.js /src
CMD ["node", "/src/hello.js"]