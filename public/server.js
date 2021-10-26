const express = require ('express')
const path = require ('path')

const app = express ()
// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: 'c55c999a71474a8b86ccac5a70a91f4c',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

app.get('/', function)(req, res){
 res.sendFile(path.join(__dirname, "///index.html"))
})

const port = process.env.PORT || 4567
app.listen(4567, {} => console.log('Take us to warp 4567'))