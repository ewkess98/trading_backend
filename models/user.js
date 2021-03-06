"use strict";
const mongoose = require("mongoose");
const user = mongoose.Schema({
    name: { type: String, trim: true, },
    email: { type: String, unique: true, },
    password: { type: String, required: true },
    profileImageName: { type: String, },
    dob: { type: String, default: "" },
    // friends: [{
    //     _id: false,
    //     friendId: { type: mongoose.Schema.ObjectId, ref: 'user', },
    //     status: {
    //         type: String, default: "un-block",
    //         enum: ["un-block", 'blocked']
    //     },
    //     createdAt: { type: Date, default: Date.now }
    // },],
    // favourites: [{ type: mongoose.Schema.ObjectId, ref: 'user' }],

    status: {
        type: String, default: "active",
        enum: ["active", "inactive"]
    },
    fcmToken: { type: String, default: "" },
}, { timestamps: true });

user.index({ "loc": "2dsphere" });
mongoose.model("user", user);
module.exports = user;




