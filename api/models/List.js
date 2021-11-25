const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    genre: { type: String},
    type: { type: String},
    content: {type: Array}
}
);

module.export = mongoose.model("List", ListSchema)
