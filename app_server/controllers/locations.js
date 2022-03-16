/*GET Homelist h1= buffered code and #{} used for buffered code in specific place */
const homelist = function(req, res) {
    return res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!',
        },
        otherContent: {
           shortAbout: 'Loc8r helps you find places to work when out and about. ' +
                    'Perhaps with coffee, cake or a pint? Let Loc8r' +
                    ' help you spend money rather than just look at your phone, ' +
                    'using mobile internet and musing at the ever increasing simplicity' +
                    'of your life.. Why is it all so complicated?'
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
        }]
    }
    )};

/*GET locationInfo*/
const locationInfo = (req, res) => res.render('location-detail', {
    title: 'Loc8r - Is this the place?',
    pageHeader: {
        title: 'Go for a walk, use your phone..',
        strapline: '',
    },
    otherContent: {
        extra1: 'Starcups is on Loc8r because there was a need to get it on Loc8r as a part of someone\'s learning process.',
        extra2: 'If you\'ve been and you like it, you are deluded, it does not exist, and even if it did, don\'t leave a review, really, who cares?',
    },
    location: {
        name: 'Schuing-shcuang Starcups',
        address: '123 Hupe Street, Yeading, RG4 1PS',
        openingHours: ['Monday - Friday : 7.00am - 7.00pm', 'Saturday : 8.00am - 5.00pm', 'Sunday : closed'],
        rating: 3,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        distance: '100m',
        customerReviews: [{
            date: '09 March 2022',
            author: 'Ming-the-Merciless',
            rating: 4,
            reviewText: 'I came, I drank, I applied.. Moustache \'definition enhancement\' product in the immaculately ' +
                'clean toilets. Pointy. Fresh. Fine indeed!'
        },{
            date: '14 February 2022',
            author: 'Graham Duthie',
            rating: 5,
            reviewText: 'Amazing coffee and friendly staff'
        }]
    }
});

/*GET addReview*/
const addReview = (req, res) => res.render('add-review', {
    title : 'What did you think?',
    pageHeader: {
        title: `Review`,
        strapline: '',
    },
    otherContent: {},
    location: {
        name: 'Starcups'
    }
});


module.exports = {
    homelist,
    locationInfo,
    addReview
}
