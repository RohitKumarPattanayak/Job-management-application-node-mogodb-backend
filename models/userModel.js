import mongoose from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     admin:
 *     user:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - role
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: The user name
 *         email:
 *           type: string
 *           description: Email address of the user
 *         password:
 *           type: string
 *           description: password of the user account
 *         role:
 *           type: string
 *           description: user role management(admin or user)
 *
 *       example:
 *         name: "John Doe"
 *         email: "johndoe@abc.com"
 *         password: "hellomate2342"
 *         role: "admin"
 */

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("user", UserSchema);
