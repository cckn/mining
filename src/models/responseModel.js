'use strict';


const axios = require('axios');
const matchModel = require('./matchModel');
const api_config = require('../config/api.json');

class Response {
    constructor(matchId) {
        this.matchId = matchId;
        console.log(`constructor :: ${this.matchId}`);
    }

    async getResponse() {
        const url = `https://kr.api.riotgames.com/lol/match/v3/matches/${
            this.matchId
        }?api_key=${api_config.key}`;

        try {
            const res = await axios.get(url);

            this.getData(res)
        } catch (error) {
            console.log(`catch :: ${error.response.status}`);
        }
    }


    getData(response) {
        const res = response;

        // console.log(response);

        this.status = res.status;
        this.headers = res.headers;

        this.match = new matchModel(res.data);

        this.show();
    }

    show() {
        console.log(this);
    }
}

module.exports = Response;
