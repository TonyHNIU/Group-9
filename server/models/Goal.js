const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    Goal: {
        type: String,
        required: true
    },
    Very_High_Contribution: {
        type: "array"
    },
    High_Contribution: {
        type: "array"
    }
});

module.exports = Goal = mongoose.model('goal', goalSchema);