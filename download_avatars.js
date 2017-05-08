var request = require('request');
var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!');

var URLs = {};
var GITHUB_USER = "ffiargus";
var GITHUB_TOKEN = "";
var USER_AGENT = "GitHub Avatar Downloader - Student Project";

function getRepoContributors(repoOwner, repoName, cb) {

  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
    // console.log("Status Code: " + response.statusCode);
    // console.log("Body: " + response);
    // console.log(response);
  var options = {
    "url": requestURL,
    "headers": {
      "user-agent": USER_AGENT
    }
  }
  request.get(options, function (err, response) {
    cb(err, JSON.parse(response.body));
  });

  // request(options, function(err, response, body) {
  //   cb(err, JSON.parse(response.body));
}
  // })
  //cb(response.statusCode, response);
  //console.log(requestURL);

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  //console.log("Result:", result);
  for (person of result){
    //console.log(person.avatar_url);
    URLs[person.login] = person.avatar_url;
    console.log(URLs[person.login]);
    downloadImageByURL(person.avatar_url, 'avatars/'+person.login+'.jpg')
  }

});

function downloadImageByURL(url, filePath) {
//function downloadImageByURL("https:\/\/avatars2.githubusercontent.com\/u\/2741?v=3&s=466", "avatars/kvirani.jpg") {
  request.get(url)
       .pipe(fs.createWriteStream(filePath));
}
