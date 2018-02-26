'use strict';

const axios = require('axios');
const app = require('../app');

const config = {
    api: require('./config/api'),
};
const models = {
    response: require('./models/response'),
    match: require('./models/match'),
};

const getMatchId = () => {
    return 3040204762;
};

// const getResponse = matchId => {
//     console.log(matchId);

//     axios
//         .get(
//             `https://kr.api.riotgames.com/lol/match/v3/matches/${matchId}?api_key=${
//                 config.api.key
//             }`
//         )
//         .then(data => {
//             return data;
//         });
//     return axios;
// };

const getResponse = async matchId => {
    const res = await axios.get(`https://kr.api.riotgames.com/lol/match/v3/matches/${matchId}?api_key=${
        config.api.key
    }`).then(data => data)
    // console.log(res);
    
    return res

    // const response = new models.response(
    //     await axios.get(
    //         `https://kr.api.riotgames.com/lol/match/v3/matches/${matchId}?api_key=${
    //             config.api.key
    //         }`
    //     )
    // );
    return response
};

const main = async () => {
    console.log("0");

    console.log(getResponse(getMatchId()));    
    console.log("1");

    console.log("2");
    
};

main();

module.exports = { getMatchId, getResponse };
