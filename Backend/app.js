import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import { sendEmail } from "./utils/sendEmail.js";
import { Contact } from "./models/Contact.js";

const app = express();
config({ path: "./config.env" });

app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["POST"],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.post("/send/mail", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }

  try {
    const contact = new Contact({ name, email, message });
    await contact.save();

    await sendEmail({
      email: "merndeveloper4@gmail.com",
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email,
    });

    res.status(200).json({
      success: true,
      message: "Message saved and email sent successfully.",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
