const port = 8080;
let app = require("./app");
app.initMongoose("mongodb://localhost/demoJokes");
app.listen(port, () => console.log(`Started server listening on ${port}`));
