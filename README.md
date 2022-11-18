# Inifinity Library - a book renting app

An android app connecting the owner and the one who wants to rent books for a specific time.

## Tech stack

### Frontend

- React Native

### API Framework

- FastAPI

### Database

- Postgresql
- Redis
- Sqlalchemy (data modeling and querying)
- Pydantic (data schemas)
- Alembics (data migration)

### Containerization

- Docker
- Docker compose (development)
- Kubernetes (production)

### CI/CD

- Github Actions

### Deployment environment

- AWS EKS (Amazon Web Service Elastic Kubernetes Service)
- AWS ECR (private repository to store docker images)

### Others

- Ingress Nginx (https://kubernetes.github.io/ingress-nginx/)
- OpenAPI
- Makefile
- Bash
- Pylint, pep8
- Eslint

## How to install

### Development

The whole development workflow is powered by `docker` and `docker-compose`.
To run the application locally, only `docker` and `docker-compose` are required to be installed
In order to install `docker` and `docker-compose`. Please visit https://docs.docker.com/compose/install/

#### Usage

To start the backend application using `docker-compose`

```bash
docker compose up --build
```
To stop the application, open new terminal and run command:
```bash
docker compose down
```
To run tests
```
pytest
```
### Production

The application is separated into two parts: front-end is a cross-platform mobile application powered by React Native, back-end is a FastAPI server running in Docker and Kubernetes environment.
Therefore, there are two deployment workflows for the application.

#### Frontend

The mobile application will be automatically built and releases an installable file whenever a new tag is introduced

#### Backend

Because frontend always needs the latest version of APIs, therefore, backend should be deployed whenever there are new changes merged into main. The whole continuous deployment workflow is powered by Github Actions, Docker, Kubernetes and AWS EKS (Amazon Web Services Elastic Kubernetes Service)

Intermediate steps (building docker images, connecting to AWS EKS, run tests, checking linting errors...) are done by Github Actions

To able to check APIs documentation (OpenAPI), please visit: http://34.118.65.73/api/v1/docs
Exposed IP: http://34.118.65.73/

## License

[MIT](https://choosealicense.com/licenses/mit/)
