const express = require("express");
const app = express();

app.use(expres.json());


app.get("/", (req, res) => {
    res.send("Hey hey");
});

const port = process.env.PORT || 8080
app.listen(port, () => { 
    console.log("The server is running on port", 8080);
});