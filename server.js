//import routes
import userAuth from "./routes/v1/userAuth.js";
import userRegister from "./routes/v1/userRegister.js";
import userApplications from "./routes/v1/userApplications.js";
import userJobs from "./routes/v1/userJobs.js";
import adminRegister from "./routes/v2/adminRegister.js";
import adminAuth from "./routes/v2/adminAuth.js";
import adminjobs from "./routes/v2/adminJobCrud.js";
import express from "express";
import cors from "cors";
import connectDB from "./dao/db.js";
import { PORT } from "./utils/constants.js";
import adminuserdetails from "./routes/v2/adminGetUserDetails.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import morgan from "morgan";
import adminAnalytics from "./routes/v2/adminGetAnalytics.js";
//create the connection

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Jobs API",
      version: "1.0.0",
      description: "An express Job RESTful API",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/v1/*.js", "./routes/v2/*.js", "./models/*.js"],
  securityDefinitions: {
    bearerAuth: {
      type: "apiKey",
      name: "x-auth-token",
      scheme: "bearer",
      in: "header",
    },
  },
  security: [{ bearerAuth: [] }],
};

const specs = swaggerJSDoc(options);

const app = express();
// bb.extend(app);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
app.use(morgan());
connectDB();

//define routes
app.use("/api/v1/auth", userAuth);
app.use("/api/v1/register", userRegister);
app.use("/api/v1/applications", userApplications);
app.use("/api/v1/jobs", userJobs);
app.use("/api/v2/register", adminRegister);
app.use("/api/v2/auth", adminAuth);
app.use("/api/v2/jobs", adminjobs);
app.use("/api/v2/userdetails", adminuserdetails);
app.use("/api/v2/get_analytics", adminAnalytics);
//API documentation route
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.get("/", (req, res) => {
  res.json({ status: "welcome to job application backend" });
});

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
