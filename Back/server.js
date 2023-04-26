const mongoose = require("mongoose");
const app = require("./app");


mongoose
    .connect("mongodb+srv://budget-planner:VkxSjFN0gZmiU7vd@cluster0.aytmdss.mongodb.net/?retryWrites=true&w=majority")
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

const port = 4000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});