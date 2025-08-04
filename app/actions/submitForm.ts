"use server";

import { createTransport } from "nodemailer";

export async function submitForm(data: FormData) {
  const formData = Object.fromEntries(data);
  let vehicleDetails;
  if (formData.data) {
    vehicleDetails = `Registration Data: ${formData.data}`;
  } else {
    vehicleDetails = `
      Make: ${formData.make || "Not provided"}
      Model: ${formData.model || "Not provided"}
      Year: ${formData.year || "Not provided"}
      Fuel Type: ${formData.fuel_type || "Not provided"}
      Engine Capacity: ${formData.engine_capacity || "Not provided"}
      Registration: ${formData.registration || "Not provided"}
    `;
  }
  const services = [];
  if (formData.part_supplied_fitted) services.push("Part Supplied & Fitted");
  if (formData.supply_only) services.push("Supply Only");
  const engineTypes = [];
  if (formData.new) engineTypes.push("New");
  if (formData.used) engineTypes.push("Used");
  if (formData.rebuilt) engineTypes.push("Rebuilt");

  const emailContent = `
    <h1>New Vehicle Service Request</h1>
    
    <h2>Customer Details:</h2>
    <p><strong>Name:</strong> ${formData.name}</p>
    <p><strong>Mobile:</strong> ${formData.mobile}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Postcode:</strong> ${formData.postcode}</p>
    
    <h2>Vehicle Details:</h2>
    <pre>${vehicleDetails}</pre>
    
    <h2>Service Options:</h2>
    <p><strong>Services Selected:</strong> ${
      services.join(", ") || "None selected"
    }</p>
    <p><strong>Engine Types Preferred:</strong> ${
      engineTypes.join(", ") || "None selected"
    }</p>
    <p><strong>Does Vehicle Drive?:</strong> ${
      formData.drives || "Not specified"
    }</p>
    <p><strong>Requires Collection?:</strong> ${
      formData.requiresCollection || "Not specified"
    }</p>
    
    <h2>Additional Notes:</h2>
    <p>${formData.note || "No additional notes provided"}</p>
  `;

  // Configure SMTP transporter
  const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // Email options
  const mailOptions = {
    from: `"Vehicle Service Form" <${process.env.SMTP_FROM_EMAIL}>`,
    to: process.env.SMTP_TO_EMAIL,
    subject: "New Vehicle Service Request",
    html: emailContent,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Form submitted successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to submit form");
  }
}
