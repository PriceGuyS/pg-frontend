var AWS = require('aws-sdk');
AWS.config.loadFromPath('../../.aws/config.json');

var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
AWS.config.update({endpoint: "https://dynamodb.us-west-2.amazonaws.com"});

//console.log("hello");
//search('Super Mario 64')
//search('Banjo Kazooie')

module.exports = function search(input){
  var params = {
    ExpressionAttributeValues: {
      ':test': input
      //':q': 'query',
      //':hope': 'r',
      //':end': 't',
      //':sub': 'Super Mario 64',
      //':blah': '332412832140',
    },
    KeyConditionExpression: 'inputQuery = :test', //has to be = and it has to be an exact match
    //FilterExpression: 'contains (:q, :sub)',
    TableName : 'testTable6' // this table has the proper key structure
  };

  docClient.query(params, function(err, data) {
      if (err) console.log(err); // an error occurred
      else console.log(data); // successful response
  });
}
