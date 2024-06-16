const app = require("./src/javascripts/app");

const port = process.env.PORT || 4000;

app.listen(port);

console.log(`Listen on Port ${port}`);