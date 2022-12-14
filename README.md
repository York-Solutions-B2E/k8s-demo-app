# Example k8s demo application

This project contains a full stack web application.
This project has an Angular frontend being served on port 80 by a nginx container.
We are also using a Spring Boot backend served on port 8080 by a openjdk container.
The postgresql database is only accessible via the docker network "default"

## Running the application
 run ```docker compose up``` in the terminal
 open a web browser to http://localhost
