import bcrypt from "bcryptjs";
import User from "../../models/userModel.js";
import { jwtSecret } from "../../utils/constants.js";
import Jwt from "jsonwebtoken";

export const get_logged_admin = async (req, res) => {
  const id = req.user.id;
  const admin = await User.findOne({ _id: id }).select("-password");
  console.log(id);
  res.json({ logged_admin: admin });
};

export const admin_login = async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });

  if (user && user.role === "admin") {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const p_load = {
        user: {
          id: user.id,
        },
      };

      const token = Jwt.sign(p_load, jwtSecret, { expiresIn: 86400000 });
      console.log("test");
      return res
        .status(200)
        .json({ Message: "authorized", Admin_token: token });
    } else {
      return res.status(400).json({ Message: "incorrect password" });
    }
  } else if (user && user.role !== "admin") {
    return res
      .status(403)
      .json({ Message: "access denied you ae not the admin" });
  } else {
    return res
      .status(400)
      .json({ Message: "access denied user does not exists" });
  }
};
