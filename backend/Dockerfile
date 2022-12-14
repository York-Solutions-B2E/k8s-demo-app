FROM gradle:jdk11 as build
WORKDIR /app
COPY ./ ./
RUN gradle --no-daemon bootJar

FROM openjdk:11-jdk-slim
COPY --from="build" /app/build/libs/*-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]