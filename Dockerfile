FROM tomcat:9

MAINTAINER Leon Qi "https://github.com/LeonQi800/Docker"

# WORKDIR /usr/local/tomcat/webapps/

# COPY ./webapp .

CMD ["catalina.sh", "run"]

# EXPOSE 8448