# Shop Bridge Backend

This application is a server for [Shop Bridge](https://shop-bridge.netlify.app/home) and it is hosted in [heroku](https://dashboard.heroku.com/).

## Available API's routes are:

### https://shop-bridge-back.herokuapp.com/

This is the base url link hosted in heroku.

### '/api/product/create', POST Method
For addding new product to database
### '/api/product/products', GET Method
For getting all products from database.

### '/api/product/product/:productID', GET Method
For getting particular product using its id from database.

### '/api/product/update', PUT Method
For updating values of a product from databse.

### '/api/product/delete', DELETE Method
To delete a particular product from databse.

## Description

I have used [Nest](https://github.com/nestjs/nest) framework with TypeScript and [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) as database.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
