const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 100,
  },
});

// bookinstance's url
GenreSchema.virtual("url").get(function () {
  retunr`/catalog/genres/${this._id}`;
});

module.exports = mongoose.model("Genre", GenreSchema);