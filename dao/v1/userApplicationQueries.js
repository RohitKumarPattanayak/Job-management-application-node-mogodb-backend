import Application from "../../models/applicationModel.js";
import mongoose from "mongoose";

export const post_application_by_jobId_query = async (
  user,
  dob,
  phone,
  previousCompany,
  position,
  location,
  website,
  workStartDate,
  workEndDate,
  workDetails,
  educationLevel,
  universityName,
  subject,
  universityLocation,
  educationArea,
  educationStartDate,
  educationEndDate,
  educationDetails,
  skills,
  resume,
  jobId
) => {
  const finalResult = new Application({
    user,
    basicDetails: {
      dob,
      phone,
    },
    appliedJob: mongoose.Types.ObjectId(jobId),
    workExperience: {
      previousCompany,
      position,
      location,
      website,
      workStartDate,
      workEndDate,
      workDetails,
    },
    education: {
      educationLevel,
      universityName,
      subject,
      universityLocation,
      educationArea,
      educationStartDate,
      educationEndDate,
      educationDetails,
    },
    skills: [...skills],
    resume,
  });

  return await finalResult.save();
};

export const get_applications_by_user_query = async (user) => {
  const result = await Application.find({
    user,
  }).populate("appliedJob");
  return result;
};

export const put_edit_application_by_id_query = async (
  applicationId,
  user,
  dob,
  phone,
  previousCompany,
  position,
  location,
  website,
  workStartDate,
  workEndDate,
  workDetails,
  educationLevel,
  universityName,
  subject,
  universityLocation,
  educationArea,
  educationStartDate,
  educationEndDate,
  educationDetails,
  skills,
  resume
) => {
  const result = await Application.findOneAndUpdate(
    { _id: applicationId, user },
    {
      $set: {
        dob,
        phone,
        previousCompany,
        position,
        location,
        website,
        workStartDate,
        workEndDate,
        workDetails,
        educationLevel,
        universityName,
        subject,
        universityLocation,
        educationArea,
        educationStartDate,
        educationEndDate,
        educationDetails,
        skills,
        resume,
      },
    },
    { new: true }
  );
  return result;
};
