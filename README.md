# [![My Skills](https://skillicons.dev/icons?i=sequelize)](https://skillicons.dev) Module 13 - E-Commerce / ORM 


## Description

This is a back end for an e-commerce website that uses the latest technologies so that your company can compete with other e-commerce companies. 


## Table of Contents 

- [Visuals](#visuals)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Visuals


[Click here for Walkthrough Video](https://drive.google.com/file/d/1NrVWtzWjSlas0dEY5INMQ1sAHYewDD1t/view)




## Installation

You will first need to install some dependencies.
In VS Code, open the Terminal. 
On the command line, type the following command:

npm i 

You will also need to use the MySQL2 package to connect to the MySQL database.

On the command line, type the following commands:

npm i mysql 

You can create the database in MySQL by:
source db/schema.sql;

You can then seed the data by running: 
node seeds/index.js

Then, the application will be invoked by using one of the following commands:

1.) node server.js
2.) npm start 

## Usage 

Using a functional Express.js API, you may add your database name, MySQL username, and MySQL password to an environment variable file and then will be able to connect to a database using Sequelize. After entering schema and seed commands, then a development database is created and is seeded with test data. When you enter the command to invoke the application, your server is started and the Sequelize models are synced to the MySQL database.
Using Insomnia Core, you can open API GET routes for categories, products or tags and the data for each of these routes is displayed in a formatted JSON. You are able to test API POST, PUT, and DELETE routes in Insomnia Core
and will be able to successfully create, update, and delete data in your database.

## Tests 

Use Insomnia Core to test API GET, POST, PUT, and DELETE routes. 

## License

Boost Software License 1.0

## Badges

[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)

## Questions 