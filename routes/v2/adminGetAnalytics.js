import express from "express";
import auth from "../../middleware/auth.js";
import { get_analytics } from "../../services/v2/adminGetAnalyticsServices.js";

const router = express.Router();

/*
route: api/v2/get_analytics
method: GET
description: fetches number of application and jobs available
access: public
*/

router.get("/", auth, get_analytics);

export default router;
