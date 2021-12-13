const mongoose = require('mongoose')
const ModelSchema = mongoose.Schema({
    name: { type: String, required: true },
    information: {
        info_1: { type: Number },
        info_2: { type: Number },
    },
    experiment: [{
        type: Number, required: true
    }],
    total: {
        type: Number, default: 100
    }
}, {
    timestamps: true
})
module.exports = mongoose.model("Arifmetik", ModelSchema)