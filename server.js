#!/usr/bin/env node

// import dependencies
import express from 'express';
import minimist from 'minimist';
import { roll } from './lib/roll.js';


const args = minimist(process.argv.slice(2));
const app = express();

app.use(express.urlencoded({ extended: true }));

// requirement #1 - setting port
const port = args.port || 5000;

// requirement #2 - default endpoint
app.use((req, res) => {
	res.send("404 NOT FOUND");
});

// requirement #3 - checking endpoint
app.get('/app/', (req, res) => {
    res.send('200 OK');
});

// requirement #4 - returns JSON for default roll of two 6-sided dice one time
app.get('/app/roll/', (req, res) => {
    res.send(roll(6,2,1));
});

// requirement #5 - accepts either JSON or URLEncoded data body
app.post('/app/roll/', (req, res) =>{
    const sides = parseInt(req.body.sides);
    const dice = parseInt(req.body.dice);
    const rolls = parseInt(req.body.rolls);
    
    res.send(roll(sides, dice, rolls));
})

// requirement #6 - returns JSON for default rolls and dice
app.get('/app/roll/:sides/', (req, res, next) =>{
    const sides = parseInt(req.params.sides);
    res.send(roll(sides, 2, 1));
})


//requirement #7 - returns JSON for default rolls
app.get('/app/roll/:sides/:dice', (req, res, next) =>{
    const sides = parseInt(req.params.sides);
    const dice = parseInt(req.params.dice);
    res.send(roll(sides, dice, 1));
})

//requirement #8 - returns JSON for specified rolls 
app.get('/app/roll/:sides/:dice/:rolls/', (req, res) =>{
    const sides = parseInt(req.params.sides);
    const dice = parseInt(req.params.dice);
    const rolls = parseInt(req.params.rolls);
    res.send(roll(sides, dice, rolls));
})
