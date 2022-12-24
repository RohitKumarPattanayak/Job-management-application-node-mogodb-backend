import User from "../../models/userModel.js";
import Application from "../../models/applicationModel.js";

export const get_user_details = async (req, res) => {
  // let users_details = [];
  // let job_applied = [];
  // let skills = [];

  // const users = await User.find();
  // let l = users.length;

  // users.every(async (obj, index) => {
  //   const perticular_user = await Application.find({
  //     user: obj.id,
  //   });

  //   if (perticular_user.length >= 1) {
  //     perticular_user.forEach((obj) => {
  //       job_applied.push(obj.appliedJob);
  //       skills = [...obj.skills];
  //     });
  //   }

  //   users_details.push({
  //     user_name: obj.name,
  //     user_id: obj.id,
  //     appliedJob: [...job_applied],
  //     skills: [skills],
  //   });

  //   // skills = [];
  //   job_applied = [];
  //   // if (index === l - 1) {
  //   //   return res.json({ All_User_Details: users_details });
  //   // }
  //   console.log(users_details);
  // });
  const result = await Application.find().populate("user appliedJob");

  return res.json(result);
};
