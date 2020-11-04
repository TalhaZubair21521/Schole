const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const UserSchema = new Schema(
  {
    id: Schema.ObjectId,
    name: { type: String, required: true },
    age: { type: Number, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String},
    completeStatus: { type: Boolean, default: true  },
    provider: { type: Object, default: {  type:  "local",  providerId: 0  } },
  },
  { timestamps: true }
);

UserSchema.statics.CreateHash = (password) => {
    return bcrypt.hashSync(password, 10);
};

UserSchema.statics.isPasswordEqual = async (password, passwordFromDatabase) => {
    return bcrypt.compare(password, passwordFromDatabase);
};
module.exports = mongoose.model("user", UserSchema);