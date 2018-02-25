// const request = require('supertest');
const should = require('should');
const expect = require('chai').expect;
// const app = require('../app');
const main = require('../src/main.js');

const models = {
    match: require('../src/models/match'),
};

var mochaAsync = fn => {
    return async done => {
        try {
            await fn();
            done();
        } catch (err) {
            done(err);
        }
    };
};

describe.only('response 정보를 가져온다.', () => {
    let matchId;
    let asyncValue;

    it('match Id를 return한다.', done => {
        matchId = main.getMatchId();
        matchId.should.be.a.Number();
        done();
    });

    before(() => {
        main.getResponse().then(response => {
            asyncValue = response;
            done();
        });
    });

    it.only('match Id를 이용해 match 정보를 가져온다.', async done => {
        // const response = await main.getResponse();
        //  expect(asyncValue).to.eqsual('something');
        done();
    });
});

// describe.only('match 정보를 성공적으로 parsing한다.', () => {
//     describe('match 정보를 성공적으로 parsing한다.', () => {
//         it('test', done => {
//             let num = mining.test();
//             num.should.be.a.Number();
//             num.should.equal(5);
//             //res.body.should.have.property('id', 1);
//             done();
//         });
//     });
// });
