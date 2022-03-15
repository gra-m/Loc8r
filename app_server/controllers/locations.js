/*GET Homelist h1= buffered code and #{} used for buffered code in specific place */
const homelist = function(req, res) {
    return res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!',
        },
        locations: [{
            name: 'Starcups',
            address: '123 Hupe Street, Yeading, RG4 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        },{
            name: 'Warkers',
            address: '12 Aupeng Street, Silforth, SI3 4SJ',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Good wifi', 'Cats'],
            distance: '5.0km'
        },{
            name: 'Winkers',
            address: '10 Dreezel Street, Sloalgh, SI4 5SJ',
            rating: 5,
            facilities: ['Hot drinks', 'wifi', "infinite-refills" ],
            distance: '5.5km'
        },{
            name: 'Wonkers',
            address: '101 Room Street, Stepford, SI5 5SJ',
            rating: 5,
            facilities: ['Hot drinks', 'Amazing wifi', "Infinite-refills", "Curated music experience" ],
            distance: '7.5km'
        },]
    }
    )};

/*GET locationInfo*/
const locationInfo = (req, res) => res.render('locationInfo', {title: 'Location Info'});

/*GET addReview*/
const addReview = (req, res) => res.render('addReview', {title : 'Add a Review'});


module.exports = {
    homelist,
    locationInfo,
    addReview
}
