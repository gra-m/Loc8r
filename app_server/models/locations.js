const mongoose = require('mongoose');


// region Why no distance?
/*
Maps on hold but on schema for now
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

