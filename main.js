var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

var readFiles = function (address) {
  var numOfFiles;
  GET(address);

  postToBeeminder(numOfFiles);
};


var postToBeeminder = function (odometer) {
  getBeeminderCredentials();
  var BeeminderURL;

  PUT(BeeminderURL, odometer);
};