import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

// In-memory storage (replace with database in production)
const submissions: any[] = [];

// Email configuration
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Forwarded-Host, X-URL-SCHEME, x-api-key, Content-Type, Accept'
    );
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, organization, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Store submission
    const submission = {
      id: Date.now().toString(),
      name,
      email,
      organization: organization || 'Not specified',
      message,
      submittedAt: new Date().toISOString(),
    };

    submissions.push(submission);

    // Send notification email to info@datawaveconsultancy.com
    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Organization: ${organization || 'Not specified'}

Message:
${message}

---
Submitted at: ${new Date().toLocaleString()}
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'info@datawaveconsultancy.com',
      subject: `New Contact Request from ${name}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
    });

    // Also send a confirmation email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We received your request - Datawave Consultancy',
      text: `Hi ${name},\n\nThank you for reaching out to Datawave Consultancy. We have received your request and will respond with clarity on scope, timelines, and next steps.\n\nBest regards,\nDatawave Team`,
      html: `<p>Hi ${name},</p><p>Thank you for reaching out to Datawave Consultancy. We have received your request and will respond with clarity on scope, timelines, and next steps.</p><p>Best regards,<br>Datawave Team</p>`,
    });

    return res.status(200).json({
      success: true,
      message: 'Request submitted successfully',
      id: submission.id,
    });
  } catch (error) {
    console.error('Error processing submission:', error);
    return res.status(500).json({
      error: 'Failed to process submission. Please try again.',
    });
  }
}
