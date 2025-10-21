import crypto from "crypto"
import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingData } = await request.json()

    // Verify signature
    const body = razorpay_order_id + "|" + razorpay_payment_id
    const expectedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET).update(body).digest("hex")

    if (expectedSignature !== razorpay_signature) {
      return Response.json({ success: false, error: "Invalid signature" }, { status: 400 })
    }

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: bookingData.email,
      subject: "Booking Confirmation - VK RIDES",
      html: `
        <h2>Booking Confirmed!</h2>
        <p>Dear ${bookingData.name},</p>
        <p>Your car rental booking has been confirmed.</p>
        <h3>Booking Details:</h3>
        <ul>
          <li><strong>Car:</strong> ${bookingData.carName}</li>
          <li><strong>Pickup Date:</strong> ${bookingData.pickupDate}</li>
          <li><strong>Return Date:</strong> ${bookingData.returnDate}</li>
          <li><strong>Days:</strong> ${bookingData.days}</li>
          <li><strong>Price per Day:</strong> ₹${bookingData.carPrice}</li>
          <li><strong>Total Amount:</strong> ₹${bookingData.totalAmount}</li>
          <li><strong>Payment ID:</strong> ${razorpay_payment_id}</li>
        </ul>
        <p>Thank you for choosing VK RIDES!</p>
        <p>Contact us: +91 9102430174 | vkrides.in@gmail.com</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    // Also send to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: "vkrides.in@gmail.com",
      subject: `New Booking - ${bookingData.carName}`,
      html: `
        <h2>New Booking Received</h2>
        <p><strong>Customer Name:</strong> ${bookingData.name}</p>
        <p><strong>Email:</strong> ${bookingData.email}</p>
        <p><strong>Phone:</strong> ${bookingData.phone}</p>
        <p><strong>Car:</strong> ${bookingData.carName}</p>
        <p><strong>Pickup Date:</strong> ${bookingData.pickupDate}</p>
        <p><strong>Return Date:</strong> ${bookingData.returnDate}</p>
        <p><strong>Days:</strong> ${bookingData.days}</p>
        <p><strong>Total Amount:</strong> ₹${bookingData.totalAmount}</p>
        <p><strong>Payment ID:</strong> ${razorpay_payment_id}</p>
      `,
    }

    await transporter.sendMail(adminMailOptions)

    return Response.json({ success: true, message: "Payment verified and booking confirmed" })
  } catch (error) {
    console.error("Verification error:", error)
    return Response.json({ error: error.message }, { status: 500 })
  }
}
