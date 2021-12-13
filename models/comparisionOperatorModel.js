const mongoose = require('mongoose')
const SchemaModel = mongoose.Schema({
    item: {
        name: { type: String, required: true },
        code: { type: String, required: true },
    },
    age: {
        type: String, required: true
    },
    tag: [{
        type: String, required: true
    }],
}, {
    timestamps: true
})
module.exports = mongoose.model("Comparision", SchemaModel)