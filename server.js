const express = require("express");
const app = express();

const port = 5001;
app.use(express.urlencoded({ extended: true }));

const userAuth = require('./routes/auth')

app.use("/login", userAuth);


app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
