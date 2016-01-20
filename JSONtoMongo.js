'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    importList = require('./listings.json'),
    config = require('./config.js');

/* Connect to your database */
mongoose.connect(config.db.uri);
/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */
/*var importUser = JSON.parse(importList);
new Listing({
  code: importList.code,
  name: importList.name,
  coordinates: {
    latitude: importList.latitude,
    longitude: importList.longitude,
  },
  address: importList.address
}); */

var listData = JSON.parse(importList);
//var importUser = JSON.stringify(listData);
var list = new Listing(listData);

list.save(function(err) {
  if (err) throw err;
  console.log('User created!');
});

/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
