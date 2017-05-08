var request = require('request');
var fs = require('fs');
require('dotenv').config();

console.log('Welcome to the GitHub Repo recommender!');

var URLs = {};
var GITHUB_USER = process.env.user;
var GITHUB_TOKEN = process.env.token;
var USER_AGENT = "GitHub Avatar Downloader - Student Project";

function getRepoContributors(repoOwner, repoName, cb) {

  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  var options = {
    "url": requestURL,
    "headers": {
      "user-agent": USER_AGENT
    }
  }
  request.get(options, function (err, response) {
    cb(err, JSON.parse(response.body));
  });
}
var owner = process.argv[2];
var repo = process.argv[3];

function

if (!fs.existsSync("./.env"))
  throw ".env is missing!";
if (!process.env.token)
  throw "GitHub token not found";
if (process.argv[4])
  throw "Invalid arguements, please enter the owner followed by the repo.";

if (owner != null && repo != null){
  getRepoContributors(owner, repo, function(err, result) {
    if (!result[0])
      throw "The repo does not exist, or invalid credentials";
    console.log("Errors:", err);
    for (person of result){
      downloadImageByURL(person.avatar_url, 'avatars/'+person.login+'.jpg')
    }
  });
} else {
  console.log("Invalid arguements, please enter the owner followed by the repo.")
}
