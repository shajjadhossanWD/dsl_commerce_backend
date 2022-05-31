const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
        },
        username: {
            type: String,
        },
        email: {
            type: String,
        },
        walletAddress: {
            type: String,
            required: true,
        },
        network: {
            type: String,
        },
        avatar: {
            type: String,
            default: "https://i.ibb.co/BrZCmp5/maleprofile.jpg",
        },
        otp: {
            type: Number
        },
        isEmailVerified: {
            type: Boolean,
            default: false
        },
        nftRegister: {
            type: Boolean,
            default: false
        },
        usernameUpdateHistory: {
            type: Array,
            default: []
        },
        referralID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    },
    {
        timestamps: true,
    }
);

const model = mongoose.model("User", userSchema);
module.exports = model;