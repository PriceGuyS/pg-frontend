var AWS = require('aws-sdk');

AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:1ebfaeaa-5d62-4e67-ae99-b7d2a407c1e8', //put the key here
});

var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
//search('Super Mario 64');
search('Banjo Kazooie')

function search(input) {
  var params = {
    ExpressionAttributeValues: {
      ':test': input
    },
    KeyConditionExpression: 'inputQuery = :test', //has to be = and it has to be an exact match
    //FilterExpression: 'contains (:q, :sub)',
    TableName : 'testTable6' // this table has the proper key structure
  };

  return docClient.query(params, function(err, data) {
      if (err) return err; // an error occurred
      else return data; // successful response
  });
}

export default search;
