import Application from "../../models/applicationModel.js";
import Job from "../../models/jobModel.js";

export const get_jobs_by_user_applications_query = async (user) => {
  const result = await Application.find({
    user,
  }).select("appliedJob -_id");
  return result;
};

export const get_jobs_by_filtering_users_query = async (cleanerArray) => {
  const result = await Job.find({ _id: { $nin: cleanerArray } });
  return result;
};
