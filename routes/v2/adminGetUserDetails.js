import express from "express";
import auth from "../../middleware/auth.js";
import { get_user_details } from "../../services/v2/adminGetUserDetailsServices.js";
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: admin_fetch_user_details
 *   description: admin fetch user details API
 */

/**
 * @swagger
 * /api/v2/userdetails:
 *   get:
 *     summary: Get all the users complete details
 *     tags: [admin_fetch_user_details]
 *     parameters:
 *      - in: header
 *        name: x-auth-token
 *        schema:
 *          type: string
 *        required: true
 *        description: The admin auth token
 *   responses:
 *    200:
 *      description: Get all the registered users details
 *      content:
 *        application/json:
 *          schema:
 *            type: string
 */

/*
route: api/v2/userdetails
method: GET
description: Get all the registered users details.
access: public
*/

router.get("/", auth, get_user_details);

export default router;
