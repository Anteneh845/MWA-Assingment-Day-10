const {Schema, model} = require("mongoose");

const locationSchema = new Schema({
    city: {type: String, required: true},
    street: {type: String, required: true},
    state: {type: String, required: true},
    zipCode: {type: Number, required: true}
})

const jobOpeningSchema = new Schema({
    title: {type: String, required: true},
    salary: {type: Number, required: true},
    description: {type: String, required: true},
    experience: {type: Number, required: true},
    skills: [{type: String, required: true}],
    postDate: {type: Date, default: Date.now()},
    location: locationSchema,
    createdOn: {type: Date, default: Date.now()}
})

model("JobOpening", jobOpeningSchema)
