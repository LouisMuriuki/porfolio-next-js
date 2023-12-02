import express from "express";
import cors from "cors";
import AssistantRoute from "./routes/AssistantRoute.ts";
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1/assistant/conversation", AssistantRoute);

const startServer = async () => {
  try {
    app.listen(8080, () => {
      console.log("runnig");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
