import Razorpay from "razorpay"

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
})

export async function POST(request) {
  try {
    const { amount, currency = "INR", receipt, notes } = await request.json()

    const order = await razorpay.orders.create({
      amount: amount * 100, // Convert to paise
      currency,
      receipt,
      notes,
    })

    return Response.json(order)
  } catch (error) {
    console.error("Error creating Razorpay order:", error)
    return Response.json({ error: error.message }, { status: 500 })
  }
}
