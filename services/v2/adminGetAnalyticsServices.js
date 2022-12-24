import Application from "../../models/applicationModel.js";
import Jobs from "../../models/jobModel.js";

export const get_analytics = async (req, res) => {
  const no_of_applications = await Application.count();
  const no_of_jobs = await Jobs.count();
  return res.json({
    no_of_applications,
    no_of_jobs,
  });
};
