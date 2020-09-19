import express, { response } from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "GO STACK 11" });
});

app.listen(3333, () => {
  console.log("🚀🚀 server started on port 3333");
});
