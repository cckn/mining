// const request = require('supertest');

'use strict';

const axios = require('axios');
const should = require('should');
const expect = require('chai').expect;

const main = require('../src/main.js');
const apiConfig = require('../src/config/api.json');
const responseModel = require('../src/models/responseModel');

let response;

const getResponse = async (gameId) => {
    try {
        const res = await axios.get(
            `https://kr.api.riotgames.com/lol/match/v3/matches/${gameId}?api_key=${
                apiConfig.key
            }`
        );
        return new responseModel(res);
    } catch (e) {
        return e;
    }
};

describe('정상적인 game parser', async () => {
    before(async () => {
        await getResponse(3040204762);
    });
    it('data는 undefined가 아닐 것', (done) => {
        // getResponse();
        // console.log(data);
        expect(data).to.be.not.undefined;
        done();
    });
});

describe.only('정상적인 game parser', async () => {
    let response
    const expected = {
        status: 404,
        gameId: 3040204766,
        queueId: 430,
    };

    before(async () => {
        response = await getResponse(3040204766);
    });

    it('data는 undefined가 아닐 것', (done) => {
        expect(response).to.be.not.undefined;
        done();
    });

    it(`game Id가 일치해야 함 :: ${expected.gameId}`, (done) => {
        expect(response.match.gameId).to.deep.equal(expected.gameId);
        done();
    });

    it(`expected queueId :: ${expected.queueId}`, (done) => {
        expect(response.match.queueId).to.deep.equal(expected.queueId);
        done();
    });
});

describe.only('404 status', async () => {
    let response

    before(async () => {
        response = await getResponse(3040204767);
    });

    it('response가 error 일 것 ', () => {
        expect(response).to.be.an('error');
    });
});
