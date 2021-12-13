const mongoose = require('mongoose')

const ModelSchema = mongoose.Schema({
    name: { type: String, required: true },
    task_1: { type: Number, required: true },
    task_2: { type: Number, required: true },
    task_3: { type: String, required: true },
    task_4: { type: String, required: true },
}, {
    timestamps: true
})
module.exports = mongoose.model('Logical', ModelSchema)