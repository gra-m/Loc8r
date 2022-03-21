const mongoose = require('mongoose');

// region Why no distance?
/*
I spent an evening and actually found a google account that would accept my credit card, this in itself was a frustrating experience,
two accounts failed on CC entry. Then I failed to get a simple map up straight away and at the same time noticed that within 30 minutes of
playing around some of my credit had already been used. I know that they stop service rather than bill when this credit
is used up, but I really had enough at that point (late night special) and thought that I would revisit gmaps in the future.
My main aim for this project has always been MEAN, I can live without distance working for now.
https://developers.google.com/maps/documentation/api-picker?hl=en-GB
 5.3.2. Geographic data in Mongodb == would store this as long/lat coordinates and even create an index based on this data
Mongo in */
// endregion

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
    }
});

locationSchema.index({coords: '2dsphere'}) // define the path 'coords' as having a '2dsphere' index
// longitude -180 to 180 THEN latitude -90 to 90

