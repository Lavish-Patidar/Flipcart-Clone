import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    address: { type: String, required: true },

    name: { type: String, required: true, index: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, unique: true, required: true },
});

const User = mongoose.model('user', userSchema);

export default User;
