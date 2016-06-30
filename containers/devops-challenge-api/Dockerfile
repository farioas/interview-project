FROM node:5.12.0

ENV WORKDIR /usr/src/api

RUN mkdir -p $WORKDIR
WORKDIR $WORKDIR

COPY package.json $WORKDIR
RUN npm install
COPY . $WORKDIR

EXPOSE 8000

CMD ["/usr/src/api/start.sh"]