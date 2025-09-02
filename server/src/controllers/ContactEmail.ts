import { Request, Response } from "express";
import { sendContactEmail } from "../../utils/sendEmail";

export const contactEmail = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, email, message } = req.body;
  try {
    if (!name || !email || !message) {
      res.status(400).json({
        success: false,
        error: "All fields are required",
      });
      return;
    }
    await sendContactEmail({ name, email, message });
    res.status(200).json({
      success: true,
      message: "Contact email sent successfully",
    });
    return;
  } catch (error) {
    console.error("Error sending contact email:", error);
    res.status(500).json({
      success: false,
      error: "Failed to send contact email",
    });
    return;
  }
};
