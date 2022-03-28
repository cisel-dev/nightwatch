# pull official base image
FROM node:16.13.1-alpine

# set working directory
#WORKDIR /nightwatch-ui
WORKDIR /app
# add `/nightwatch-ui/node_modules/.bin` to $PATH
ENV PATH /nightwatch-ui/node_modules/.bin:$PATH
ENV REACT_APP_ACCESS_URL ${REACT_APP_ACCESS_URL}

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . .

# start app
CMD ["npm", "start"]
