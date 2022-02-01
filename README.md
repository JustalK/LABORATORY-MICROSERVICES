# LABORATORY-MICROSERVICES


## Plan of the presentation

- [Goal](#goal)
- [Organization](#organization)
- [Development](#development)
- [Running](#running)
- [Commands](#commands)
- [Links](#links)

## Goal

The goal of this project is to show how to handle two microservices in the same repository using docker.

## Organization

| Folder's Name | Description of the folder                               |
| :------------ | :------------------------------------------------------ |
| mongodb1      | Example of separated database for user                  |
| mongodb2      | Example of separated database for action                |
| server1       | Example of user microservice                            |
| server2       | Example of action microservice                          |
| server3       | Example of gateway microservice                         |

## Running

For running the application, you simply need `docker` already install on your computer and run the following command :

```bash
$ npm run start
```

You can then use `Postman` or anything for testing the different call of the app.
You can also use `lazydocker` for analyzing the different container.

## Commands

- **npm run start**: Build and run the container
- **npm run stop**: Stop all container

## Links

https://marutitech.com/api-gateway-in-microservices-architecture/
https://docs.microsoft.com/fr-fr/dotnet/architecture/microservices/architect-microservice-container-applications/communication-in-microservice-architecture
