var AWS = require('aws-sdk');

AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:1ebfaeaa-5d62-4e67-ae99-b7d2a407c1e8', //put the key here
});

var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

function compare(data) {
  console.log("yo");
  console.log(typeof data); //object
  //console.log(data.Items[0].price); //how to access
  data.Items.sort(function(a, b){
    return parseFloat(a.price) - parseFloat(b.price); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  });

  //console.log(data.Items);
  //console.log(data.Items.slice(0,10));
  return(data.Items.slice(0,10)) //pass a parameter for slice, will need try and except for key errors, in which case return all we have

}
//http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html
//search("Super Mario 64")

module.exports = function search(input) {
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
      else{
        var results = compare(data);
        console.log(typeof results); //prints 10
        return(results);
      }
  });
}
