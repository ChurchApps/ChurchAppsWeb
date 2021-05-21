# stage1 - build react app first 
FROM node:12-alpine as build

RUN apk update

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app

COPY dotenv.sample.txt .env

RUN npm run build

# stage 2 - build the final image and copy the react build files
FROM nginx:1.19-alpine

COPY --from=build /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

EXPOSE 3400

CMD ["nginx", "-g", "daemon off;"]