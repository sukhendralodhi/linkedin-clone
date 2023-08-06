const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    description: {
        type: String,
        required: [true, 'Please add some text'],
    }
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Contact", contactSchema);