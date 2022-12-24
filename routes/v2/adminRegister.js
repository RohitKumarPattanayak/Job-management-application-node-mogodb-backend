import express from "express";
import { register_admin } from "../../services/v2/adminRegisterServices.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: admin_registration
 *   description: to register an admin
 */

/**
 * @swagger
 * /api/v2/register:
 *   post:
 *     summary: post user data to DB.
 *     tags: [admin_registration]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 *     responses:
 *       200:
 *         description: successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       500:
 *         description: Server error
 */

/*
route: api/v2/register
method: POST
description: To create an admin
access: public
*/

router.post("/", register_admin);

export default router;
