"use strict";
const AWS = require("aws-sdk");
// const AmazonDaxClient = require("amazon-dax-client");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

// const daxClient = new AmazonDaxClient({endpoints: [process.env.DAX_ENDPOINT], region: process.env.REGION});

const saveToDB = (tableName, dataObj) => {
  const params = {
    TableName: tableName,
    Item: dataObj,
  };

  return new Promise((resolve, reject) => {
    dynamoDb.put(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const getFromDB = (tableName, Key) => {
  const params = {
    TableName: tableName,
    Key,
  };
  return new Promise((resolve, reject) => {
    dynamoDb.get(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = { saveToDB, getFromDB };
