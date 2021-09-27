# Readme

## About the project

Help the public to find public documents in administrations.

## Contribute

### Tech stack

- React / TypeScript for the front
- Node for the backend in NextJs
- MongoDB for the database

### Run the project in local

Required :

- NodeJS v 16+ (use nvm)
- yarn => npm i -g yarn if you don’t have it
- mongo database
- Clone the repo and hit yarn in the root folder to install the package.
- run

### Get started with the data

You need to add the database of french cities. The dataset comes from here : https://www.data.gouv.fr/fr/datasets/base-officielle-des-codes-postaux/.

To inject the data in your local database, you must run the script with `yarn inject-cities` from the local-database package. This injection must also be done in the production database. An updated if the cities list change.

### Commit your work

We are using in this project two tools for commits:

- [Commitlint](https://commitlint.js.org/#/)
- [Commitizen](https://commitizen.github.io/cz-cli/)

To commit your work run the command yarn commit. Then follow the instructions.

For the content of the commitlint mesage tells you everything in your terminal however here are some basic rules:

- no empty subject
- all in lowercase
- 100 characters maximum

### Deploy

At the moment, deploy to production happen every time code is pushed to the main branch.
