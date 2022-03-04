const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

app.get("/api/compliment", (req, res) => {

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});
const fortune = ["A pleasant surprise is waiting for you.",
  "A smooth long journey! Great expectations.",
  "An important person will offer you support.",
  "Better ask twice than lose yourself once.",
  "Bide your time, for success is near."];

app.get("/api/fortune", (req, res) => {
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];
  
  res.status(200).send(randomFortune);
});

app.delete("/api/fortune", (req, res) => {
  fortune.splice(0, 5);
  res.status(200).send(fortune);
});

app.post("/api/fortune", (req, res) => {
  let newFortune = req.body.str;
  // console.log(newFortune);
  fortune.push(newFortune);
  res.status(200).send(fortune);
})

app.put("/api/compliment", (req, res) => {
  let editComp = req.body.str;
  compliments.splice(0, 1, editComp);
  res.status(200).send(compliments);
})

app.listen(4000, () => console.log("Server running on 4000"));
