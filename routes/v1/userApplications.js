import express from "express";
import auth from "../../middleware/auth.js";
import { imageUpload } from "../../middleware/upload.js";

import {
  get_applications_by_user_service,
  post_application_by_jobId_service,
  put_edit_application_by_id_service,
} from "../../services/v1/userApplicationServices.js";
import { body } from "express-validator";
import setRequestBody from "../../middleware/setRequestBody.js";
import validation from "../../middleware/validation.js";
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: applications
 *   description: The job applications API
 */

/**
 * @swagger
 * /api/v1/applications:
 *   post:
 *     summary: post form data to DB with file upload
 *     tags: [applications]
 *     parameters:
 *      - in: header
 *        name: x-auth-token
 *        schema:
 *          type: string
 *        required: true
 *        description: The auth token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/application'
 *     responses:
 *       200:
 *         description: successfully added
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/application'
 *       500:
 *         description: Server error
 */

/*
route: api/v1/applications
method: POST
description: post the application of a candidate
access: private
*/
/*
 [
    body("dob", "dob is required").isString().not().isEmpty(),
    body("name", "name is required").not().isEmpty(),
    body("password", "enter password with 6 or more characters").isLength({
      min: 8,
    }),
  ],
*/
router.post(
  "/:jobId",
  auth,
  imageUpload.single("file"),
  setRequestBody,
  [
    body("data.dob", "dob is required and should be a string")
      .isString()
      .not()
      .isEmpty(),
    body("data.phone", "phone number is required and should be numbers")
      .isNumeric()
      .not()
      .isEmpty(),
    body("data.position", "position is required and should be a string")
      .isString()
      .not()
      .isEmpty(),
    body("data.location", "location is required and should be a string")
      .isString()
      .not()
      .isEmpty(),
    body("data.website", "website is required and should be a string")
      .isString()
      .not()
      .isEmpty(),
    body(
      "data.workStartDate",
      "workStartDate is required and should be a string"
    )
      .isString()
      .not()
      .isEmpty(),
    body("data.workEndDate", "workEndDate is required and should be a string")
      .isString()
      .not()
      .isEmpty(),
    body("data.workDetails", "workDetails is required and should be a string")
      .isString()
      .not()
      .isEmpty(),
    body(
      "data.educationLevel",
      "educationLevel is required and should be a string"
    )
      .isString()
      .not()
      .isEmpty(),
    body(
      "data.universityName",
      "universityName is required and should be a string"
    )
      .isString()
      .not()
      .isEmpty(),
    body("data.subject", "subject is required and should be a string")
      .isString()
      .not()
      .isEmpty(),
    body(
      "data.universityLocation",
      "universityLocation is required and should be a string"
    )
      .isString()
      .not()
      .isEmpty(),
    body(
      "data.educationArea",
      "educationArea is required and should be a string"
    )
      .isString()
      .not()
      .isEmpty(),
    body(
      "data.educationStartDate",
      "educationStartDate is required and should be a string"
    )
      .isString()
      .not()
      .isEmpty(),
    body(
      "data.educationEndDate",
      "educationEndDate is required and should be a string"
    )
      .isString()
      .not()
      .isEmpty(),
    body(
      "data.educationDetails",
      "educationDetails is required and should be a string"
    )
      .isString()
      .not()
      .isEmpty(),

    body("data.skills", "skills is required and should be an array of strings")
      .isArray()
      .not()
      .isEmpty(),
  ],
  validation,
  post_application_by_jobId_service
);

/**
 * @swagger
 * /api/v1/applications:
 *  get:
 *    summary: get all applications of a user
 *    tags: [applications]
 *    parameters:
 *      - in: header
 *        name: x-auth-token
 *        schema:
 *          type: string
 *        required: true
 *        description: The auth token
 *    responses:
 *       200:
 *         description: All the applications of the current user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/application'
 */

/*
route: api/v1/applications
method: POST
description: get all the applications of the current user
access: private
*/

router.get("/", auth, get_applications_by_user_service);

/**
 * @swagger
 * /books/{applicationId}:
 *  put:
 *    summary: Update an application of a user by id
 *    tags: [applications]
 *    parameters:
 *      - in: header
 *        name: x-auth-token
 *        schema:
 *          type: string
 *        required: true
 *        description: The auth token
 *      - in: path
 *        name: applicationId
 *        schema:
 *          type: string
 *        required: true
 *        description: The application Id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/application'
 *    responses:
 *      200:
 *        description: The appliction was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/application'
 *
 *      500:
 *        description: Server error
 */

/*
route: api/v1/applications
method: PUT
description: edit the application of a user by applicationId
access: private
*/

router.put(
  "/application/:applicationId",
  auth,
  imageUpload.single("file"),
  put_edit_application_by_id_service
);

export default router;

// parameters:
//           in: header
//           name: x-auth-token
//           schema:
//             type: string
//           required: true
//  *        description: The auth token
