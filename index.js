import express from "express";
import cors from "cors";

//アクテイベート
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/gonzo", (req, res) => {
  res.send("腰痛");
});

// app.get("/narutino", (req, res) => {
//   res.send("あほ");
// });

app.get("/todo", (req, res) => {
  const responseTodo = [
    { title: "勉強する", done: false },
    { title: "ゲームする", done: true },
    { title: "なるちのの借金を受けとる", done: true },
  ];

  res.json(responseTodo);
});

app.listen(3000, () => {
  console.log("3000で立ち上がりました...");
});

// Json
// {
//     test:"value"
// }
