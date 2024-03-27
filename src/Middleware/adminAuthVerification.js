const userModel = require('../Model/user/userModel');
const mongoose = require("mongoose");
const ObjectId=mongoose.Types.ObjectId;

const isAdmin = async (req, res, next) => {
    try {
         const userID=new ObjectId(req.headers.userID);
        if (!userID) {
            return res.status(401).json({ status:"fail",data: "User ID not provided in headers" });
        }

        const user = await userModel.findOne({ _id: userID});
        if (!user || user.role !== 'admin') {
            return res.status(403).json({ status:"fail",data: "Unauthorized access" });
        }

        next();
    } catch (error) {
        console.error("Error in isAdmin middleware:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = isAdmin;
