import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, country } = body;

    // Basic validation
    if (!name || !email || !phone || !service || !country) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password (not your login password)
      },
    });

    const serviceLabels: Record<string, string> = {
      website: 'Website as a Service',
      ads: 'Meta Ads Management',
      whatsapp: 'WhatsApp Marketing & Automation',
      development: 'Custom Development',
      chatbot: 'AI Chatbots & Voice Agents',
      maintenance: 'Maintenance & Support',
    };

    const countryLabels: Record<string, string> = {
      india: 'India',
      uae: 'UAE',
      'saudi-arabia': 'Saudi Arabia',
      qatar: 'Qatar',
      bahrain: 'Bahrain',
      other: 'Other Region',
    };

    // Admin notification email
    await transporter.sendMail({
      from: `"InnVox Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #2563eb, #4f46e5); padding: 32px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 800;">New Project Inquiry</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">via InnVox Contact Form</p>
          </div>
          <div style="padding: 32px; background: white;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; width: 140px;">Full Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 15px; color: #0f172a; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 15px; color: #2563eb; font-weight: 600;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 15px; color: #0f172a; font-weight: 600;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Service</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 15px; color: #0f172a; font-weight: 600;">${serviceLabels[service] || service}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-size: 13px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Location</td>
                <td style="padding: 12px 0; font-size: 15px; color: #0f172a; font-weight: 600;">${countryLabels[country] || country}</td>
              </tr>
            </table>
          </div>
        </div>
      `,
    });

    // Client confirmation email
    await transporter.sendMail({
      from: `"InnVox" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We received your inquiry, ${name.split(' ')[0]}!`,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #2563eb, #4f46e5); padding: 40px 32px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 800;">Thank you, ${name.split(' ')[0]}!</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 12px 0 0; font-size: 15px;">We have received your project inquiry and will get back to you within 24 hours.</p>
          </div>
          <div style="padding: 32px; background: white;">
            <h2 style="font-size: 16px; color: #0f172a; font-weight: 700; margin: 0 0 16px;">Here is what you submitted:</h2>
            <table style="width: 100%; border-collapse: collapse; background: #f8fafc; border-radius: 10px; overflow: hidden;">
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 10px 16px; font-size: 13px; color: #64748b; font-weight: 600;">Service</td>
                <td style="padding: 10px 16px; font-size: 14px; color: #0f172a; font-weight: 600;">${serviceLabels[service] || service}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 10px 16px; font-size: 13px; color: #64748b; font-weight: 600;">Location</td>
                <td style="padding: 10px 16px; font-size: 14px; color: #0f172a; font-weight: 600;">${countryLabels[country] || country}</td>
              </tr>
              <tr>
                <td style="padding: 10px 16px; font-size: 13px; color: #64748b; font-weight: 600;">Phone</td>
                <td style="padding: 10px 16px; font-size: 14px; color: #0f172a; font-weight: 600;">${phone}</td>
              </tr>
            </table>
            <div style="margin-top: 28px; text-align: center;">
              <a href="https://wa.me/919939711942" style="display: inline-block; background: #16a34a; color: white; text-decoration: none; padding: 14px 28px; border-radius: 10px; font-weight: 700; font-size: 15px;">Chat on WhatsApp for faster reply</a>
            </div>
            <p style="margin-top: 24px; font-size: 13px; color: #94a3b8; text-align: center;">InnVox &middot; innvox.in.official@gmail.com &middot; +91 9939 711942</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Form submitted successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}
