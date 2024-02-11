require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const verifyToken = require("./middleware/verifyToken");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

const PORT = process.env.PORT || 5000;

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

app.use("/user", require("./routes/api/Users"));
app.use(verifyToken);
app.use("/watchlist", require("./routes/api/Watchlists"));
