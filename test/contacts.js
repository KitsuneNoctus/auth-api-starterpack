// test/contacts.js
const app = require("./../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
// const agent = chai.request.agent(app);

const server = require('../server');
const Contact = require('../models/contact');

chai.should();
chai.use(chaiHttp);

describe('Contacts', function() {
    const agent = chai.request.agent(server);

    const newContact = {
        name: 'Mename',
        email: 'emails@email.com',
        phone: '(650)123-4567'
    };

    it('Should create a Contact', function(){
        Contact.estimatedDocumentCount()
        .then(function (initialDocCount){
            agent
                .post("/contacts/new")
                .set("content-type", "application/x-www-form-urlencoded")
                .send(newContact)
                .then(function(res){
                    Contact.estimatedDocumentCount()
                        .then(function (newDocCount) {
                            expect(res).to.have.status(200);
                            expect(newDocCount).to.be.equal(initialDocCount + 1)
                            done();
                        })
                        .catch(function (err) {
                            done(err);
                        });
                })
        })
        .catch(function (err) {
            done(err);
        });
    });

    it('Should show a Contact', function(){
        agent
            .post("/contact/:id")
            .then(function (newDocCount) {
                expect(res).to.have.status(200);
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });

    it('Should update a Contact', function(){
        agent
            .post("/contact/:id")
            .then(function (newDocCount) {
                expect(res).to.have.status(200);
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });

    it('Should delete a Contact', function(){
        //Doesn't work properly
        Contact.estimatedDocumentCount()
        .then(function (initialDocCount){
            agent
                .post("/delete/:id")
                // .set("content-type", "application/x-www-form-urlencoded")
                .set("params","id")
                .send(newContact)
                .then(function(res){
                    Contact.estimatedDocumentCount()
                        .then(function (newDocCount) {
                            expect(res).to.have.status(200);
                            expect(newDocCount).to.be.equal(initialDocCount - 1)
                            done();
                        })
                        .catch(function (err) {
                            done(err);
                        });
                })
        })
        .catch(function (err) {
            done(err);
        });
    });

});