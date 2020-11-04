const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const ResultSchema = new Schema(
  {
    id: Schema.ObjectId,
    game1: { type: Number, default: 0 },
    game2: { type: Number, default: 0 },
    game3: { type: Number, default: 0 },
    game4: { type: Number, default: 0 },
    game5: { type: Number, default: 0 },
    game6: { type: Number, default: 0 },
    game7: { type: Number, default: 0 },
    game8: { type: Number, default: 0 },
    game9: { type: Number, default: 0 },
    status: { type: String, default: "G0L0" },
    user: { type: Schema.Types.ObjectId, ref: "user" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("result", ResultSchema);
