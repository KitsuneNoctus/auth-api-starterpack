const Contact = require('../models/contact');
const { ensureAuth, ensureGuest } = require('../middleware/auth')

module.exports = (app) => {

    //Show New
    app.get('/contacts/new', (req, res) => {
        res.render('contacts-new.handlebars');
    });

    //CREATE
    app.post("/contacts/new", (req, res) => {
        // res.render('contacts-new.handlebars');
        var contact = new Contact(req.body);
        contact
        .save()
        .then(contact => {
            return res.redirect(`/`);
        })
        .catch(err => {
            console.log(err.message);
        });
        console.log(req.body);
    });

    //UPDATE
    app.get('/contacts-update/:id', (req, res) => {
        Contact.findById(req.params.id).lean()
        .then(contact => {
            res.render("contacts-update", { contact });  
        })
        .catch(err => {
            console.log(err.message);
        });
    });

    app.post("/contacts-update/:id", (req, res) => {
        Contact.updateOne({ _id: req.body.id},{
            $set:{
                "name": req.body.name,
                "email": req.body.email,
                "phone": req.body.phone,
                "socialone": req.body.socialone,
                "socialtwo": req.body.socialtwo,
                "private": req.body.private
            }
        })
        .then(contact => {
            return res.redirect(`/`);
        })
        .catch(err => {
            console.log(err.message);
        });
        console.log(req.body);
    });

    //DELETE
    app.get("/delete/:id", (req, res) =>{
        Contact.deleteOne({"_id": req.params.id})
        .then(contact => {
            return res.redirect(`/`); 
        })
        .catch(err => {
            console.log(err.message);
        });
    });
}