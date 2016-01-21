/* Fill out these functions using Mongoose queries*/

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config.js');

mongoose.connect(config.db.uri);


var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
   Listing.find({ code: 'LBW' }, function(err, listing) {
    if (err) throw err;

    console.log(listing);
    console.log('\n\n');
   });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
   Listing.findOneAndRemove({ code: 'CABL' }, function(err) {
    if(err) throw err;
    console.log("Listing deleted\n\n");
   });
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
   Listing.findOneAndUpdate( {name: "Phelps Laboratory"}, {address: "100 Phelps Lab P.O. Box 116350 Gainesville, FL  32611", 
   coordinates:  { latitude: 29.621042, longitude: -82.366337}}, {'new': true }, function(err, listing) {
    if (err) throw err;
    console.log(listing);
    console.log('\n\n');
  });
};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Listing.find({}, function(err, listing) {
    if(err) throw err;

    //console.log(listing);
   });
};



findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
