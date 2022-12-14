# build
FROM node:18.12.1 as build
WORKDIR ./app
COPY ./ ./

RUN npm install -g @angular/cli
RUN npm install
RUN npm run build

# deploy
FROM nginx:latest
COPY --from=build ./app/dist /usr/share/nginx/html
RUN ls /usr/share/nginx/html



