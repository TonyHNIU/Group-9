const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    Goal: {
        type: String,
        required: true
    },
    VeryHighContribution: {
        type: "array"
    },
    HighContribution: {
        type: "array"
    }
});

module.exports = Goal = mongoose.model('goal', goalSchema);