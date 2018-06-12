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

const Movies = mongoose.model('Movies', movieSchema),
Shows = mongoose.model('Shows', showSchema);

const getAllMovies = (cb) => {
    Movies.find().exec(data => cb(data))
}


module.exports = {
    getAllMovies
}