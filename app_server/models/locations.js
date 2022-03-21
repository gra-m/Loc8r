const mongoose = require('mongoose');

/*
'http://maps.googleapis.com/maps/api/place?key=AIzaSyBPkFneVxX1ylrSSBl6hNPMk5_8gweS7Ng/staticmap?center=51.025285,4.474310&zoom=17&size=400x350&sensor=false&markers=51.025285,4.474310&scale=2&key=AIzaSyBPkFneVxX1ylrSSBl6hNPMk5_8gweS7Ng'
 */
/*

               const CONFIGURATION = {
                "locations": [
            {"title":"De Langhestraat","address1":"De Langhestraat","address2":"2800 Mechelen, Belgium","coords":{"lat":51.025285359027386,"lng":4.474310437434372},"placeId":"EidEZSBMYW5naGVzdHJhYXQsIDI4MDAgTWVjaGVsZW4sIEJlbGdpdW0iLiosChQKEgmBbYX1xeXDRxGbr2BdbJlmexIUChIJSSCFUJTlw0cRAFhNL6uZAAQ"}
                ],
                "mapOptions": {"center":{"lat":38.0,"lng":-100.0},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":false,"zoom":4,"zoomControl":true,"maxZoom":17},
                "mapsApiKey": "AIzaSyBPkFneVxX1ylrSSBl6hNPMk5_8gweS7Ng",
                "capabilities": {"input":true,"autocomplete":false,"directions":false,"distanceMatrix":false,"details":false}
            };

                    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBPkFneVxX1ylrSSBl6hNPMk5_8gweS7Ng&callback=initMap&libraries=places,geometry&solution_channel=GMP_QB_locatorplus_v4_cA" async defer></script>
*/

//AIzaSyBPkFneVxX1ylrSSBl6hNPMk5_8gweS7Ng Restricted
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
    facilities: [String]
});

