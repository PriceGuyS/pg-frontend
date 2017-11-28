var AWS = require('aws-sdk');

AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: '####', //put the key here
});

var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

function compare(data) {
  console.log("yo");
  console.log(typeof data); //object
  console.log(data.Items[0].price); //how to access //https://gist.github.com/umidjons/9614157
  data.Items.sort(function(a, b){
    return parseFloat(a.price) - parseFloat(b.price);
  });

  console.log(data.Items);

}
//http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html
search("Super Mario 64")

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
      else compare(data);
  });
}
