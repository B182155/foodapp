const mongoose = require("mongoose");

try {
  mongoose
    .connect(process.env.DATABASE_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log("DATABASE_CONNECTION SUCCESSFUL");
    });
} catch (err) {
  console.log(err);
}
