import express from "express";
import cors from "cors";
import AssistantRoute from "./routes/AssistantRoute.ts";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1/assistant/conversation", AssistantRoute);

const startServer = async () => {
  const port = process.env.PORT || 3000;
  try {
    app.listen(port, () => {
      console.log("runnig");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
