const mongoose = require('mongoose');


// region Why no Google Map?
/*
Maps on hold but on schema for now
https://developers.google.com/maps/documentation/api-picker?hl=en-GB
 5.3.2. Geographic data in Mongodb == would store this as long/lat coordinates and even create an index based on this data
Mongo in */
// endregion


// sub documents must be know to there documents (so before them):
// Decision: time saved as String, could be date with just time used or minutes since midnight.
const openingTimeSchema = new mongoose.Schema({
    days: {
        type: String,
        required: true,
    },
    opening: String,
    closing: String,
    closed: {
        type: Boolean,
        required: true,
    },
});

const reviewSchema = new mongoose.Schema({
    author: String,
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    reviewText: String,
    createdOn: {
        type: Date,
        'default': Date.now,
    },
});



const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: String,
    rating: {
        type: Number,
        'default': 0,
        min: 0,
        max: 5
    },
    distance: Number,
    facilities: [String],
    coords: {
        type: {type: String},
        coordinates: [Number]
    },
    openingTimes: [openingTimeSchema],
    reviews: [reviewSchema],
});

locationSchema.index({coords: '2dsphere'}) // define the path 'coords' as having a '2dsphere' index
// longitude -180 to 180 THEN latitude -90 to 90

mongoose.model('location', locationSchema);
