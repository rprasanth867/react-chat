const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
        "https://api.chatengine.io/users",
        {username: username, secret: username, first_name: username},
        {headers: {"PRIVATE-KEY": "e0b7c935-f60c-4719-8f2e-1fe0bc80064f"}}
    )
    console.log('+++++++ req came ++++++++')
    return res.status(r.status).json(r.data);
  } catch (err) {
    return res.status(err.response.status).json(err.response.data);
  }
});

app.listen(3001);
