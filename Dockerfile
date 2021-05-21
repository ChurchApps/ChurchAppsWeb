# stage1 - build react app first 
FROM node:12-alpine as build

ARG PORT=3400
ARG REACT_APP_ACCESS_API=https://accessapi.staging.churchapps.org
ARG REACT_APP_APP_URL=https://accounts.staging.churchapps.org
ARG REACT_APP_GOOGLE_ANALYTICS=''

RUN apk update

WORKDIR /app

ENV PORT=${PORT} \
    REACT_APP_ACCESS_API=${REACT_APP_ACCESS_API} \
    REACT_APP_APP_URL=${REACT_APP_APP_URL} \
    REACT_APP_GOOGLE_ANALYTICS=${REACT_APP_GOOGLE_ANALYTICS}

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app

RUN npm run build

# stage 2 - build the final image and copy the react build files
FROM nginx:1.19-alpine

COPY --from=build /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

EXPOSE 3400

CMD ["nginx", "-g", "daemon off;"]