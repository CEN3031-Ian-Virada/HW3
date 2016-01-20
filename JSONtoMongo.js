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
    config = require('./config');

/* Connect to your database */
mongoose.connect(config.uri);
/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */
var importUser = new Listing({
  code: '111', //importList.code,
  name: '222', //importList.name,
  coordinates: {
    latitude: '333', //importList.latitude,
    longitude: '444', //importList.longitude,
  },
  address: '555' //importList.address
});

importUser.save(function(err) {
  if (err) throw err;
  console.log('User created!');
});

/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
