const path = require("path")
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const openaiRoute = require("./routes/openai");

// allow to take json files
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/v1/openai", openaiRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running on port 5000!");
});