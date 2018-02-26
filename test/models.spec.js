// const request = require('supertest');
const should = require('should');
const expect = require('chai').expect;

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

describe('response 정보를 가져온다.', () => {
    let matchId;
    let response;
    const a = 1;

    before(async () => {
        matchId = main.getMatchId();
        response = new models.match.Match(await main.getResponse(matchId));
    });

    it('match Id는 숫자', done => {
        matchId.should.be.a.Number();
        done();
    });

    it('response는 객체일 것', () => {
        expect(response).to.be.an('object');
        console.log(response);


        // done();
    });

    // describe(`${response.status}`, () => {
    //     it('response에 queueId라는 property가 있다', () => {
    //         expect(response).to.have.property('queueId', 420);
    //         // done();
    //     });
    // });
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
