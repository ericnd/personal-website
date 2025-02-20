import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { ContactEmailTemplate } from '@/components/contact-email-template';
import { type ContactEmailTemplateProps } from '@/types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  const { firstName, lastName, email, message } =
    (await request.json()) as ContactEmailTemplateProps;

  const htmlContent = ContactEmailTemplate({
    firstName,
    lastName,
    email,
    message,
  });

  const mailOptions = {
    from: `Eric Do <${process.env.GMAIL_USER}>`,
    to: 'e.ricdo@outlook.com',
    subject: 'Message from contact form',
    html: htmlContent, // ✅ Plain HTML string now
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      status: 200,
      body: { message: 'Email sent successfully' },
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      body: { message: 'Error sending email', error },
    });
  }
}
