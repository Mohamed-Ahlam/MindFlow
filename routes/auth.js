const express = require('express')
const router = express.Router()
const db = require('../database') // now we have our connection with db

// used to take what user inputed in form and then send that to the database so it can be saved
router.post("/", (req, res) => {
  const { username, password } = req.body
  if (username && password) {
    try {
      db.promise().query(`INSERT INTO USER_INFO VALUES('${username}', '${password}') `);
      res.status(201).send({success: true, msg: "Created User"})
    }
    catch (err) {
      res.status(401).send(err, "err happened");}
  }
  res.end()
});

// get request to get all data from database and then itll send back
router.get("/", async (req, res) => {
    const results = await db.promise().query(`SELECT * FROM User_info`);
    res.status(200).send(results[0])
    res.end();
})


module.exports = router;

/* 

1. make connection to database and make it possible to add username,password to it
2. make front-end 

*/