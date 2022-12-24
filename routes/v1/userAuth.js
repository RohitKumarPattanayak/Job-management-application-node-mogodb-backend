import express from "express";

import auth from "../../middleware/auth.js";

import {
  get_logged_user_service,
  post_login_user_service,
} from "../../services/v1/userAuthService.js";
import { body, check, validationResult } from "express-validator";
import validation from "../../middleware/validation.js";
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: user_authentication
 *   description: The auth API
 */

/**
 * @swagger
 * /api/v1/auth:
 *   get:
 *     summary: Get logged user data
 *     tags: [user_authentication]
 *     parameters:
 *      - in: header
 *        name: x-auth-token
 *        schema:
 *          type: string
 *        required: true
 *        description: The auth token
 *   responses:
 *    200:
 *      description: Details of the logged user
 *      content:
 *        application/json:
 *          schema:
 *            type: string
 */

/*
route: api/v1/auth
method: GET
description: get logged user
access: private
*/

router.get("/", auth, get_logged_user_service);

/**
 * @swagger
 * /api/v1/auth:
 *   post:
 *     summary: post form data to DB with file upload
 *     tags: [user_authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 *     responses:
 *       200:
 *         description: successfully added
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       500:
 *         description: Server error
 */

/*
route: api/v1/auth
method: POST
description: login the user
access: public
*/

router.post(
  "/",
  [
    check("email", "enter a valid email").exists().isEmail(),
    check("password", "password is required").exists(),
  ],
  validation,
  post_login_user_service
);

export default router;
