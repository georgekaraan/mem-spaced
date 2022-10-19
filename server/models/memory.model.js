const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memoriesSchema = new Schema(
  {
    title: String,
    content: Schema.Types.Mixed,
    tool: String,
    date_created: Date,
    location: Object,
    box: [
      {
        num: Number,
        active: Boolean,
        marked: Boolean,
        date_marked: Date,
      },
    ],
    schedule: Number,
  },
  { strictQuery: false }
);

module.exports = mongoose.model("memories", memoriesSchema);
