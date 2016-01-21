'use strict';
require('events').EventEmitter.prototype._maxListeners = 1000;
//process.setMaxListeners(0);
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
/*
new Listing({
  code: importList.code,
  name: importList.name,
  coordinates: {
    latitude: importList.latitude,
    longitude: importList.longitude,
  },
  address: importList.address
});
*/

//Returns an array where each element is a listing


var listData = JSON.parse(fs.readFileSync('listings.json', 'utf8')).entries;
var i = 0;
var j = 0;

var callback = function(err){
  if(err) throw err;
  j++;
  if(j == i){
    console.log("Import complete");
    mongoose.disconnect();
  }
}

for(i; i <listData.length; i++){
   var entry = new Listing(listData[i]);
   entry.save(callback);
}


console.log(listData.length);

/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
