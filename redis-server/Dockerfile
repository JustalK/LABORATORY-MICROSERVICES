FROM redis:alpine

COPY redis.conf /redis.conf
COPY run.sh /run.sh

RUN chmod +x /run.sh
ENTRYPOINT ["sh", "/run.sh"]
