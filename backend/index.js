require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };
    console.log("connected to DB");
  } catch (err) {
    console.error(err);
  }
};

connectDB();

app.use("/watchlist", require("./routes/api/Watchlists"));
