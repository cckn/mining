'use strict';

const axios = require('axios');
const app = require('../app');

const api_config = require('./config/api');

const responseModel = require('./models/responseModel');

const getMatchId = () => {
    return 3040204762;
};
let matchId = 3040204762;

const main = async (matchId) => {
    try {
        const res = await axios.get(
            `https://kr.api.riotgames.com/lol/match/v3/matches/${matchId}?api_key=${
                api_config.key
            }`
        );
        console.log(res.headers);
    } catch (error) {
        console.log(error.response);
    }

    // const data = new responseModel(res);
};

setInterval(() => {
    main(matchId);
    matchId++;
}, 200);
