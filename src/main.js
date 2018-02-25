'use strict';

const axios = require('axios');
const app = require('../app');

const config = {
    api: require('./config/api'),
};
const models = {
    match: require('./models/match'),
};

const getResponse = async matchId => {
    const response = await axios.get(
        `https://kr.api.riotgames.com/lol/match/v3/matches/${matchId}?api_key=${
            config.api.key
        }`
    );

    return await response;
};

const getMatchId = () => {
    return 3040204762;
};

const main = async () => {
    console.log(new models.match.Match(await getResponse(getMatchId())));
};

main();

module.exports = { getMatchId, getResponse };
