import express from "express";
import router from "./routes/routes.js";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());

app.use("/api/members", router);

app.listen(3000, () => {
  console.log("server listening at 5000 for middleWare project");
});
