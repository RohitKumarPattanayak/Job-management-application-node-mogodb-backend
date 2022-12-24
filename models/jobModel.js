import mongoose from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     job:
 *       type: object
 *       required:
 *         - jobTitle
 *         - jobType
 *         - jobLocation
 *         - company
 *         - skillsRequired
 *         - jobDescription
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the job
 *         jobTitle:
 *           type: string
 *           description: The job title
 *         jobType:
 *           type: string
 *           description: Type of the job(contract, full-time)
 *         jobLocation:
 *           type: string
 *           description: location of the job
 *         company:
 *           type: string
 *           desription: company name
 *         skillsRequired:
 *           type: array of strings
 *           description: skills required for the job
 *         jobDescription:
 *           type: string
 *           description: details about the job
 *       example:
 *         jobTitle: "UX Designer"
 *         jobType: "Contract"
 *         jobLocation: "Ahmedabad"
 *         company: "Google"
 *         skillsRequired: ["html", "figma"]
 *         jobDescription: "This job offers lorem ipsum..."
 */

const JobSchema = mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    jobLocation: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    skillsRequired: {
      type: [String],
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("job", JobSchema);
