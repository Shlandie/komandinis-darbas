const mongoose = require("mongoose");
const app = require("./app");


mongoose
    .connect("mongodb+srv://mokytoja:iYEIJjvMA5SgzGmV@cluster0.dduf9nc.mongodb.net/?retryWrites=true&w=majority")
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

const port = 4000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});