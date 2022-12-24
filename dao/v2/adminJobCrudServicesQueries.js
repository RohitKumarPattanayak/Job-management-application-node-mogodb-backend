import Jobs from "../../models/jobModel.js";

export const put_jobs_by_jobId_query = async (
  id,
  jobTitle,
  jobType,
  jobLocation,
  company,
  skillsRequired,
  jobDescription
) => {
  const result = await Jobs.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        jobTitle,
        jobType,
        jobLocation,
        company,
        skillsRequired,
        jobDescription,
      },
    }
    // { new: true }
  );
  return result;
};

export const post_jobs_query = async (
  jobTitle,
  jobType,
  jobLocation,
  company,
  skillsRequired,
  jobDescription
) => {
  const newJob = new Jobs({
    jobTitle,
    jobType,
    jobLocation,
    company,
    skillsRequired,
    jobDescription,
  });
  const result = await newJob.save();
  return result;
};
