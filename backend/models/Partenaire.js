const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PartnerSchema = new Schema({
    name: {
        type: String,
        required: true,
    
       
    },
    email: {
        type: String,
        required: true,
        unique :true 
       
    },
    address: {
        type: String,
        maxlength: 55

    },
    phoneNumber: {
        type: String,
        maxlength: 8 
    },
    website: {
        type: String,
        maxlength: 255

    },
}, { timestamps: true });

const Partner = mongoose.model("Partner", PartnerSchema);

module.exports = Partner;
