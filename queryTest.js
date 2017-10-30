var AWS = require('aws-sdk');
AWS.config.loadFromPath('../../.aws/config.json');

var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
AWS.config.update({endpoint: "https://dynamodb.us-west-2.amazonaws.com"});

console.log("hello");

var params = {
  ExpressionAttributeValues: {
    ':hope': '332412832140'
  },
  KeyConditionExpression: 'id = :hope',
  TableName : "ListingsTest"
  // KeyConditionExpression: "#id = :id",
  // ExpressionAttributeNames:{
  //   "#id": "id"
  // },
  // ExpressionAttributeValues:{
  //   ":id": 332412832140
  // }
};

docClient.query(params, function(err, data) {
    if (err) console.log(err); // an error occurred
    else console.log(data); // successful response
});
