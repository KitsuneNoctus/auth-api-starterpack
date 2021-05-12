// test/contacts.js
const app = require("./../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const agent = chai.request.agent(app);

const server = require('../server');
const Contact = require('../models/contact');

chai.should();
chai.use(chaiHttp);

describe('Contacts', function() {
    const agent = chai.request.agent(server);

    it('Should create a Contact', function(){

    });

    it('Should show a Contact', function(){

    });

    it('Should update a Contact', function(){

    });

    it('Should delete a Contact', function(){

    });

});