# pull offical base image
FROM node:12-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
# when running a single react container the process exits while starting 
# development server but setting CI to true resolves the issue. 
# Source - https://github.com/facebook/create-react-app/issues/8688#issuecomment-602084087
RUN CI=true
RUN npm install --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]

# expose port
EXPOSE 3400