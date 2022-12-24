import mongoose from "mongoose";
import {
  basicDetailsSchema,
  workExperienceSchema,
  educationSchema,
} from "./mini-models.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     application:
 *       type: object
 *       required:
 *         - user
 *         - appliedJob
 *         - basicDetails
 *         - workExperience
 *         - education
 *         - skills
 *         - resume
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the job
 *         user:
 *           type: string
 *           description: ID reference of the user
 *         appliedJob:
 *           type: string
 *           description: ID reference of the job
 *         basicDetails:
 *           $ref: '#/components/schemas/basicDetails'
 *         workExperience:
 *           $ref: '#/components/schemas/workExperience'
 *         education:
 *           $ref: '#/components/schemas/education'
 *         skills:
 *           type: [string]
 *           description: skills of the applicant
 *         resume:
 *           type: string
 *           description: filename of the resume stored in server
 *       example:
 *         user: "583452374853598"
 *         appliedJob: "78675342645"
 *         basicDetails:
 *          dob: "2001-12-02"
 *          phone: 532546546
 *         workExperience:
 *          previousCompany: "Amazon"
 *          position: "sales manager"
 *          location: "Odisha"
 *          website: "www.blah.com"
 *          workStartDate: "2001-12-02"
 *          workEndDate: "2021-12-02"
 *          workDetails: "lorem ipsum si dolor amet"
 *         education:
 *          educationLevel: "Graduate"
 *          universityName: "VTU"
 *          subject: "CSE"
 *          universityLocation: "Odisha"
 *          educationArea: "lorem ipsum"
 *          educationStartDate: "2001-12-02"
 *          educationEndDate: "2021-12-02"
 *          educationDetails: "lorem ipsum si dolor amet"
 *         skills: ["html", "figma"]
 *         resume: "filename.pdf"
 */

const ApplicationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    appliedJob: {
      type: mongoose.Types.ObjectId,
      ref: "job",
    },
    basicDetails: {
      type: basicDetailsSchema,
    },
    workExperience: {
      type: workExperienceSchema,
    },
    education: {
      type: educationSchema,
    },
    skills: {
      type: [String],
      required: true,
    },
    resume: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("application", ApplicationSchema);
