const app = require('../app');
const syncDb = require('./sync-db.js');
const models = require('../models.js');

const dbConfig = require('../config/db.json');
const apiConfig = require('../config/api.json');

const axios = require('axios');

const match = require('../src/match');

// console.log(
//     'https://kr.api.riotgames.com/lol/match/v3/matches/3040204762?api_key=' +
//         apiConfig.key
// );

axios
    .get(
        'https://kr.api.riotgames.com/lol/match/v3/matches/3040204762?api_key=' +
            apiConfig.key
    )
    .then(response => {
        const m1 = new match.Match(response);
        console.log(m1);
    })
    .catch(error => {
        console.log(error);
    });
