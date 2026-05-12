import jwt from "jsonwebtoken";
import { config } from "dotenv";

config(); //loads environment variables

export const verifyToken = async (req, res, next) => {
  //token verification logic

  //get token from request (using cookie-parser or auth header)
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  console.log("token :", token);

  //if token is not present
  if (!token) {
    return res.status(400).json({ message: "Please login first" });
  }

  try {
    //verify token validity (decode token)
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken;
    //forward request to next middleware/route
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
 