const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
const job = require('../models/job');

const samplejob =     {
    "title": "Super Sweet job",
    "job-title": "La La Land",
    "description": "A great job of a lovely movie."
}
