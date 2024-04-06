import express from "express";
import router from "@/router.js";

const app = express();
app.use(express.json());
app.use("/v1", router);
app.listen(8080, () => console.log(new Date()));
