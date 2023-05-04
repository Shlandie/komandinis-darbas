const mongoose = require("mongoose");
const app = require("./app");

const dotenv = require("dotenv");
dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log("Connected to MongoDB"))
     .catch((err) => console.log(err));

const port = 4000;
app.listen(port, () => {
     console.log(`App running on port ${port}`);
});