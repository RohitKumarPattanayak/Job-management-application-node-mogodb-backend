import express from "express";
import auth from "../../middleware/auth.js";
import {
  create_jobs,
  get_all_jobs,
  edit_put_jobs,
} from "../../services/v2/adminJobCrudServices.js";
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: admin_CRUD_jobs
 *   description: CRUD operation on jobs
 */

/**
 * @swagger
 * /api/v2/jobs:
 *   get:
 *     summary: Get all the users complete details
 *     tags: [admin_CRUD_jobs]
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
route: api/v2/jobs
method: POST
description: To create new jobs
access: public
*/

router.post("/", auth, create_jobs);

/*
route: api/v2/jobs
method: GET
description: To fetch all created jobs
access: public
*/

router.get("/", auth, get_all_jobs);

/*
route: api/v2/jobs/:id
method: PUT
description: To upfate created jobs
access: public
*/

router.put("/:id", auth, edit_put_jobs);

export default router;
