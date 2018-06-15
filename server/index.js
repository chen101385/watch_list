const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const path = require('path');

const app = express();

app.use(bodyParser.json());

app.get('/movies', (req, res) => {
    if (!req.body) console.log('no request body');
    db.getAllMovies((err, result) => {
        if (err) console.log('fetch failed, error:', err);
        else {
            console.log('this is result:', result);
            res.status(200).json(result);
        }
    })
})

app.get('/shows', (req, res) => {
    if (!req.body) console.log('no request body');
    db.getAllShows((err, result) => {
        if (err) console.log('fetch failed, error:', err);
        else {
            console.log('this is result:', result);
            res.status(200).json(result);
        }
    })
})

app.post('/movie', (req, res) => {
    if (!req.body) console.log('no request body');
    db.addMovie(req.body, err => {
        if (err) res.status(401).end('Failed to add movie!');
        else res.status(200).json('Movie Posting Was Successful!');
    })
});

app.post('/show', (req, res) => {
    if (!req.body) console.log('no request body');
    db.addShow(req.body, err => {
        if (err) res.status(401).end('Failed to add show!');
        else res.status(200).json('Show Posting Was Successful!');
    })
});

app.listen(process.env.PORT || 8080, () => console.log("listening on port 8080"));