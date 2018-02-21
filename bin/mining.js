const axios = require('axios');

const app = require('../app');
const syncDb = require('./sync-db.js');
const models = require('../models.js');

const dbConfig = require('../config/db.json');
const apiConfig = require('../config/api.json');

const match = require('../src/match');

syncDb().then(() => {
    const users = [
        { champId: 1, tier: 1, conut: 1 },
        { champId: 2, tier: 1, conut: 1 },
        { champId: 3, tier: 1, conut: 1 },
    ];

    models.Bans.bulkCreate(users);

    axios
        .get(
            'https://kr.api.riotgames.com/lol/match/v3/matches/3040204762?api_key=' +
                apiConfig.key
        )
        .then(response => {
            const m1 = new match.Match(response);
            // console.log(m1);
            bansUpsert(4, 1);
            bansUpsert(2, 1);
            bansUpsert(2, 1);
            bansUpsert(2, 1);
            bansUpsert(4, 1);
        })
        .catch(error => {
            console.log(error);
        });

    function bansUpsert(champId, tier) {
        models.Bans.findOne({ where: { champId, tier } }).then(ban => {
            if (!ban) {
                return models.Bans.create({ champId, tier, count: 1 });
            }
            console.log(ban.dataValues);

            // ban.count = ban.count + 1;
            // ban.save().then(() => {
            //     console.log('saved');
            // });
        });
        // .catch(error => {
        //     console.log(error.message);
        // });

        // models.Bans.create({ name })
        //     .then(user => {
        //         res.status(201).json(user);
        //     })
        //     .catch(err => {
        //         if (err.name === 'SequelizeUniqueConstraintError') {
        //             res.status(409).end();
        //         }
        //         res.status(500).end();
        //     });

        // const name = req.body.name;
        // if (!name) return res.status(400).end();
    }
});
