import Jobs from "../../models/jobModel.js";
import {
  put_jobs_by_jobId_query,
  post_jobs_query,
} from "../../dao/v2/adminJobCrudServicesQueries.js";

export const create_jobs = async (req, res) => {
  const {
    jobTitle,
    jobType,
    jobLocation,
    company,
    skillsRequired,
    jobDescription,
  } = await req.body;

  const result = await post_jobs_query(
    jobTitle,
    jobType,
    jobLocation,
    company,
    skillsRequired,
    jobDescription
  );
  return res.json(result);
};

export const get_all_jobs = async (req, res) => {
  const jobs = await Jobs.find();
  if (jobs.length == 0) {
    return res.json({ message: "no jobs to display" });
  }
  return res.json(jobs);
};

export const edit_put_jobs = async (req, res) => {
  const { id } = req.params;
  const {
    jobTitle,
    jobType,
    jobLocation,
    company,
    skillsRequired,
    jobDescription,
  } = req.body;
  const result = await put_jobs_by_jobId_query(
    id,
    jobTitle,
    jobType,
    jobLocation,
    company,
    skillsRequired,
    jobDescription
  );
  // await Jobs.findOneAndUpdate(
  //   { _id: id },
  //   {
  //     $set: {
  //       jobTitle,
  //       jobType,
  //       jobLocation,
  //       company,
  //       skillsRequired,
  //       description,
  //     },
  //   },
  //   { new: true }
  // );

  return res.status(200).json(result);
};
