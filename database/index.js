const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017');

const movieSchema = mongoose.Schema({
    movie_id: Number,
    title: String
})

const showSchema = mongoose.Schema({
    show_id: Number,
    title: String
})

const Movies = mongoose.model('Movie', movieSchema),
    Shows = mongoose.model('Show', showSchema);

const getAllMovies = cb => {
    Movies.find().exec((err, res) => {
        if (err) cb(err, null);
        else cb(null, res);
    })
}

const getAllShows = cb => {
    Shows.find().exec((err, res) => {
        if (err) cb(err, null);
        else cb(null, res);
    })
}
const addMovie = (movie, cb) => {
    let newMovie = new Movies(movie)

    newMovie.save((err, result) => {
        if (err) console.log('error adding movie:', err);
        else cb(null, result);
    });
}

const addShow = (show, cb) => {
    let newShow = new Shows(show)

    newShow.save((err, res) => {
        if (err) console.log('error adding show:', err);
        else cb(null, res);
    });
}
//***********TESTER CODE***************;


// getAllMovies((err, data) => console.log(data));

// addMovie({
//     "movie_id": 1,
//     "title": "testA"
// }, () => console.log('success!'));
// addMovie({
//     "movie_id": 1,
//     "title": "testB"
// }, () => console.log('success!'));
// addMovie({
//     "movie_id": 1,
//     "title": "testC"
// }, () => console.log('success!'));


// addShow({
//     "show_id": 1,
//     "title": "testA"
// }, () => console.log('success!'));
// addShow({
//     "show_id": 1,
//     "title": "testB"
// }, () => console.log('success!'));
// addShow({
//     "show_id": 1,
//     "title": "testC"
// }, () => console.log('success!'));

// const postMovie = cb


module.exports = {
    getAllMovies,
    getAllShows,
    addMovie,
    addShow
}