const mongoose = require("mongoose");

mongoose.connect(`${process.env.MONGO_URI}/techno_gadgets_db`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
