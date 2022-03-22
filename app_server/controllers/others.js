/*GET about*/
const about = (req, res) => res.render('about',
    {
        title: 'Who are we?',
        content: 'Loc8r was created as part of my learning the MEAN stack, which I\'ve got to say has been pretty enjoyable so far.\n\n' +
            '\tPug is interesting, very succinct, but took some getting used to.\n' +
            '\tExpress works, and the book I followed (see below) provided a good MVC template.',
    }
);

module.exports = {
    about
}
