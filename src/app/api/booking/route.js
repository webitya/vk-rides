import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const bookingData = await request.json()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Send to customer
    const customerEmail = {
      from: process.env.EMAIL_USER,
      to: bookingData.email,
      subject: "Booking Confirmation - VK RIDES",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6C63FF;">Booking Confirmed!</h2>
          <p>Dear ${bookingData.name},</p>
          <p>Thank you for booking with VK RIDES. Your booking has been confirmed.</p>
          
          <h3 style="color: #1a1a1a; margin-top: 30px;">Booking Details:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Car</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${bookingData.carName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Pickup Date</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${bookingData.pickupDate}</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Return Date</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${bookingData.returnDate}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Days</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${bookingData.days}</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Total Amount</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd; color: #6C63FF; font-weight: bold;">₹${bookingData.totalAmount}</td>
            </tr>
          </table>

          <h3 style="color: #1a1a1a; margin-top: 30px;">Next Steps:</h3>
          <ol>
            <li>Our team will contact you to confirm pickup location and time</li>
            <li>Please have your documents ready (License, ID, Credit Card)</li>
            <li>Arrive 15 minutes before pickup time</li>
          </ol>

          <h3 style="color: #1a1a1a; margin-top: 30px;">Contact Us:</h3>
          <p>
            📱 Phone: +91 9102430174<br>
            📧 Email: vkrides.in@gmail.com<br>
            📍 Location: Jamshedpur, Jharkhand
          </p>

          <p style="margin-top: 30px; color: #999; font-size: 12px;">
            Thank you for choosing VK RIDES!
          </p>
        </div>
      `,
    }

    // Send to admin
    const adminEmail = {
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
      `,
    }

    await transporter.sendMail(customerEmail)
    await transporter.sendMail(adminEmail)

    return Response.json({ success: true, message: "Booking confirmed" })
  } catch (error) {
    console.error("Booking error:", error)
    return Response.json({ error: error.message }, { status: 500 })
  }
}
