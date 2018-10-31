# Use an existing dovkrt image as a base
FROM alpine
# Download and install a dependeny
RUN apk add --update redis
#   Tell the image what to do when it starts as a container
CMD ["redis-server"]
