import {
  get_jobs_by_user_applications_query,
  get_jobs_by_filtering_users_query,
} from "../../dao/v1/userJobQueries.js";

export const get_jobs_by_filtering_users_service = async (req, res) => {
  try {
    const user = req.user.id;
    const applicationsQuery = await get_jobs_by_user_applications_query(user);
    const cleanerArray = [];
    applicationsQuery.forEach((element) => {
      cleanerArray.push(element.appliedJob.toString());
    });
    const result = await get_jobs_by_filtering_users_query(cleanerArray);
    res.status(200).json({ result });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
};
