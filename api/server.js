const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//token handling imports
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./secrets/secrets");

// restricted access middleware


//bring in the routers


const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());
//server.use('./api/auth', usersRouter)


//add server default sanity check
server.get("/", (req, res) => {
    res.status(200).json({ apiStatus: "All 200's and Blue Skies" })
  })

module.exports = server;