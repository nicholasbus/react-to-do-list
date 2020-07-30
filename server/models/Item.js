const mongoose = require('mongoose');

const { Schema } = mongoose;

const ItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    status: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;