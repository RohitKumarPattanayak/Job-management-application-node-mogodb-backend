import express from "express";
import auth from "../../middleware/auth.js";

import {
  get_logged_admin,
  admin_login,
} from "../../services/v2/adminAuthServices.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: admin_authentication
 *   description: admin auth API
 */

/**
 * @swagger
 * /api/v2/auth:
 *   get:
 *     summary: Get logged admin data
 *     tags: [admin_authentication]
 *     parameters:
 *      - in: header
 *        name: x-auth-token
 *        schema:
 *          type: string
 *        required: true
 *        description: The auth token
 *   responses:
 *    200:
 *      description: Details of the logged admin
 *      content:
 *        application/json:
 *          schema:
 *            type: string
 */

/*
route: api/v2/auths
method: GET
description: To get the logged admin
access: public
*/

router.get("/", auth, get_logged_admin);

/**
 * @swagger
 * /api/v2/auth:
 *   post:
 *     summary: post form data to DB to authorize admin
 *     tags: [admin_authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 *     responses:
 *       200:
 *         description: successfully authorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       500:
 *         description: Server error
 */

/*
route: api/v2/auths
method: POST
description: login for admin
access: public
*/

router.post("/", admin_login);

export default router;
