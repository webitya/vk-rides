import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes("@")) {
      return Response.json({ error: "Invalid email" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    const subscriberEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to VK RIDES Newsletter!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #6C63FF 0%, #5a52d5 100%); padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 28px;">Welcome to VK RIDES!</h1>
          </div>
          
          <div style="padding: 40px 20px; background-color: #f8f9fa;">
            <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
              Thank you for subscribing to our newsletter!
            </p>
            
            <p style="font-size: 14px; color: #666; line-height: 1.6; margin-bottom: 20px;">
              You'll now receive exclusive offers, updates about our latest cars, and special promotions directly in your inbox. We're excited to have you as part of the VK RIDES family!
            </p>

            <div style="background-color: #fff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #6C63FF;">
              <h3 style="color: #6C63FF; margin-top: 0;">What to Expect:</h3>
              <ul style="color: #666; font-size: 14px; line-height: 1.8;">
                <li>Exclusive discounts and early access to new vehicles</li>
                <li>Travel tips and destination guides</li>
                <li>Seasonal promotions and special offers</li>
                <li>Updates about our services and new features</li>
              </ul>
            </div>

            <h3 style="color: #1a1a1a; margin-top: 30px;">Contact Information:</h3>
            <p style="font-size: 14px; color: #666;">
              📱 Phone: <strong>+91 9102430174</strong><br>
              📧 Email: <strong>vkrides.in@gmail.com</strong><br>
              📍 Location: <strong>Jamshedpur, Jharkhand</strong>
            </p>

            <p style="margin-top: 30px; color: #999; font-size: 12px; text-align: center;">
              © 2025 VK RIDES SELF DRIVE CAR. All rights reserved.
            </p>
          </div>
        </div>
      `,
    }

    const adminEmail = {
      from: process.env.EMAIL_USER,
      to: "vkrides.in@gmail.com",
      subject: "New Newsletter Subscriber - VK RIDES",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6C63FF; border-bottom: 2px solid #6C63FF; padding-bottom: 10px;">New Newsletter Subscriber</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Subscription Date:</strong> ${new Date().toLocaleString()}</p>
            <p style="margin: 10px 0;"><strong>Status:</strong> <span style="color: #28a745; font-weight: bold;">Active</span></p>
          </div>

          <p style="color: #666; font-size: 14px;">
            This subscriber has opted in to receive newsletters and promotional updates from VK RIDES.
          </p>

          <p style="margin-top: 30px; color: #999; font-size: 12px;">
            This is an automated notification from your VK RIDES website.
          </p>
        </div>
      `,
    }

    await transporter.sendMail(subscriberEmail)
    await transporter.sendMail(adminEmail)

    return Response.json({
      success: true,
      message: "Successfully subscribed to newsletter",
    })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return Response.json({ error: error.message }, { status: 500 })
  }
}
