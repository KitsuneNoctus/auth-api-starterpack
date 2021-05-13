const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: false },
    phone: { type: String, required: false },
    socialone: { type: String, required: false },
    socialtwo: { type: String, required: false },
    private: { type: Boolean, required: false}
});

module.exports = mongoose.model("Contact", ContactSchema);