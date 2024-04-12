import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    // console.log("hi");
    console.log(error);
  }
};

// Admin access
export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if (!user) {
            return res.status(401).send({ success: false, message: "Unauthorized: User not found" });
        }
        if (user.role !== 1) {
            return res.status(401).send({ success: false, message: "Unauthorized: Admin access required" });
        }
        next();
    } catch (error) {
      // console.log("hi2");
        console.error("Error in isAdmin middleware:", error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
};