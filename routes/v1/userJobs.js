import express from "express";
import auth from "../../middleware/auth.js";
import { get_jobs_by_filtering_users_service } from "../../services/v1/userJobService.js";
const router = express.Router();

/*
route: api/v1/jobs
method: GET
description: get all jobs except the ones added by the user
access: private
*/

router.get("/", auth, get_jobs_by_filtering_users_service);

export default router;
