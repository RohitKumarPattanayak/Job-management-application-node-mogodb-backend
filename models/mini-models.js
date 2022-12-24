import mongoose from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     basicDetails:
 *       type: object
 *       required:
 *         - dob
 *         - phone
 *       properties:
 *         dob:
 *           type: date
 *           description: The user's DoB
 *         phone:
 *           type: number
 *           description: Phone number of the user
 *       example:
 *         dob: "2001-12-02"
 *         phone: 532546546
 *
 */

export const basicDetailsSchema = mongoose.Schema({
  dob: {
    type: Date,
  },
  phone: {
    type: Number,
    required: true,
  },
});

/**
 * @swagger
 * components:
 *   schemas:
 *     workExperience:
 *       type: object
 *       required:
 *         - previousCompany
 *         - position
 *         - location
 *         - website
 *         - workStartDate
 *         - workEndDate
 *         - workDetails
 *       properties:
 *         previousCompany:
 *           type: string
 *           description: The applicant's previous company
 *         position:
 *           type: string
 *           description: The applicant's previous company's position
 *         location:
 *           type: string
 *           description: The applicant's previous company location
 *         website:
 *           type: string
 *           description: The applicant's previous company's website
 *         workStartDate:
 *           type: date
 *           description: The applicant's previous job start date
 *         workEndDate:
 *           type: date
 *           description: The applicant's previous job end date
 *         workDetails:
 *           type: string
 *           description: Additional Job Details
 *       example:
 *         previousCompany: "Amazon"
 *         position: "sales manager"
 *         location: "Odisha"
 *         website: "www.blah.com"
 *         workStartDate: "2001-12-02"
 *         workEndDate: "2021-12-02"
 *         workDetails: "lorem ipsum si dolor amet"
 *
 */

export const workExperienceSchema = mongoose.Schema({
  previousCompany: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  website: {
    type: String,
  },
  workStartDate: {
    type: Date,
    required: true,
  },
  workEndDate: {
    type: Date,
    required: true,
  },
  workDetails: {
    type: String,
  },
});

/**
 * @swagger
 * components:
 *   schemas:
 *     education:
 *       type: object
 *       required:
 *         - educationLevel
 *         - universityName
 *         - subject
 *         - universityLocation
 *         - educationArea
 *         - educationStartDate
 *         - educationEndDate
 *         - educationDetails
 *       properties:
 *         educationLevel:
 *           type: string
 *           description: Level of education
 *         universityName:
 *           type: string
 *           description: Name of the university
 *         subject:
 *           type: string
 *           description: The subject of interest of the applicant
 *         universityLocation:
 *           type: string
 *           description: Location of the university
 *         educationArea:
 *           type: string
 *           description: Majors in Education
 *         educationStartDate:
 *           type: date
 *           description: The applicant's previous job start date
 *         educationEndDate:
 *           type: date
 *           description: The applicant's previous job end date
 *         educationDetails:
 *           type: string
 *           description: Additional education Details
 *       example:
 *         educationLevel: "Graduate"
 *         universityName: "VTU"
 *         subject: "CSE"
 *         universityLocation: "Odisha"
 *         educationArea: "lorem ipsum"
 *         educationStartDate: "2001-12-02"
 *         educationEndDate: "2021-12-02"
 *         educationDetails: "lorem ipsum si dolor amet"
 *
 */

export const educationSchema = mongoose.Schema({
  educationLevel: {
    type: String,
    required: true,
  },
  universityName: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  universityLocation: {
    type: String,
  },
  educationArea: {
    type: String,
    required: true,
  },
  educationStartDate: {
    type: String,
    required: true,
  },
  educationEndDate: {
    type: String,
    required: true,
  },
  educationDetails: {
    type: String,
  },
});
