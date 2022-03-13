/*GET Homelist*/
const homelist = (req, res) => res.render('homelist', {title: 'Home Page'});

/*GET locationInfo*/
const locationInfo = (req, res) => res.render('locationInfo', {title: 'Location Info'});

/*GET addReview*/
const addReview = (req, res) => res.render('addReview', {title : 'Add a Review'});

module.exports = {
    homelist,
    locationInfo,
    addReview
}
