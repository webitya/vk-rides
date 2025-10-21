import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "vkrides.in@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return Response.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}
