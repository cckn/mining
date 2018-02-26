'use strict';

const axios = require('axios');
const app = require('../app');

const api_config = require('./config/api');

const responseModel = require('./models/responseModel');

const getMatchId = () => {
    return 3040204762;
};

const main = async () => {
    const res = await axios.get(
        `https://kr.api.riotgames.com/lol/match/v3/matches/${3040204762}?api_key=${
            api_config.key
        }`
    );
    const data = new responseModel(res);
};

main();
