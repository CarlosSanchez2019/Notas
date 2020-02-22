const { Schema, model } = require('mongoose')

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},
{
    timestamps: {
        createdAt:'created_at'
    }
})

module.exports = model('note', noteSchema)