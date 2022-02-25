FROM node:16-alpine

# Install necessary dependencies
RUN apk update && apk upgrade

# Prepare working directory.
WORKDIR /app
COPY ./app .
RUN rm -fr ./node_modules
RUN npm install
RUN npm install -g serve

# Build app
RUN npm run build

# Cleanup
RUN rm -fr node_modules public src

# This is the command that starts the container
CMD ["serve", "-s", "build"]