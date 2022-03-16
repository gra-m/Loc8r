/*GET about*/
const about = (req, res) => res.render('about', {
    title: 'Who are we?',
    pageHeader: {
        title: 'About Loc8r',
        strapline: '',
    },
    otherContent: {
        extra1: 'Loc8r was created as part of my learning the MEAN stack, which I\'ve got to say has been pretty enjoyable so far.' +
            ' Pug is interesting, very succinct, took some getting used to. ' +
            'Express works, and the book I\'m following provided a good MVC template.',
        extra2: '',
    }

});

module.exports = {
    about
}
