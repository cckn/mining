'use strict';

const app = require('../app');
const responseModel = require('./models/responseModel');

let matchId = 3040204762;



const resModel = new responseModel(matchId);

resModel.getResponse()