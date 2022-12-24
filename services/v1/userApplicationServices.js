import {
  post_application_by_jobId_query,
  put_edit_application_by_id_query,
  get_applications_by_user_query,
} from "../../dao/v1/userApplicationQueries.js";
import { validationResult } from "express-validator";
export const post_application_by_jobId_service = async (req, res) => {
  const { jobId } = req.params;

  const resume = req.file.filename;

  const user = req.user.id;
  try {
    const {
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
    } = req.body.data;

    const finalResult = await post_application_by_jobId_query(
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
    );
    res.status(200).json({ message: "successfully added" });
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
};
export const get_applications_by_user_service = async (req, res) => {
  try {
    const user = req.user.id;
    const result = await get_applications_by_user_query(user);

    res.status(200).json({ result });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
};

export const put_edit_application_by_id_service = async (req, res) => {
  try {
    const { applicationId } = req.params;
    const resume = req.file.filename;
    const user = req.user.id;
    const {
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
    } = JSON.parse(req.body.data);
    const result = await put_edit_application_by_id_query(
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
    );
    res.json({ result });
  } catch (error) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
};
