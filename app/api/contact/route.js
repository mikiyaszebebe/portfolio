import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const { email, message } = await req.json()

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "mikilezen@gmail.com",
      subject: "New Message From Portfolio",
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error(error)
    return Response.json({ success: false, error: error }, { status: 500 })
  }
}
