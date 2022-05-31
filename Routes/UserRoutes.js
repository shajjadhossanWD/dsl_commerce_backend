const express = require("express");
const router = express.Router();

const {
    findOrCreateUser,
    findUserByWalletAddress,
    updateUser,
    emailOtpverification,
    verifyOTP,
    getUserByUsername,
} = require("../Controller/UserController");

const upload = require("../Middleware/Upload");
const auth = require("../Middleware/authMiddleware");

router.post("/users/emailVerification", auth, emailOtpverification);
router.post("/users/verifyOtp", auth, verifyOTP);
router.get("/users/username/:username", auth, getUserByUsername);
router.post("/users/", findOrCreateUser);
router.get("/users/:walletAddress", auth, findUserByWalletAddress);
router.put("/users/:walletAddress", upload.single("image"), updateUser);

module.exports = router;
