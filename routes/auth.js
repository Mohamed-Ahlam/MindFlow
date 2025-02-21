const express = require('express')
const router = express.Router()
const db = require('../database')

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

router.get("/", async (req, res) => {
    const results = await db.promise().query(`SELECT * FROM User_info`);
    res.status(200).send(results[0])
    res.end();
})


module.exports = router;
