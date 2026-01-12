import { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

// Simple in-memory storage for submissions
const submissions: any[] = [];

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Forwarded-Host, X-URL-SCHEME, x-api-key, Content-Type, Accept'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, organization, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields: name, email, message' });
    }

    // Create submission object
    const submission = {
      id: Date.now().toString(),
      name,
      email,
      organization: organization || 'Not specified',
      message,
      submittedAt: new Date().toISOString(),
    };

    // Store submission
    submissions.push(submission);

    // Log submission (for debugging)
    console.log('New submission received:', submission);

    // Send emails via SendGrid if API key is provided
    if (process.env.SENDGRID_API_KEY) {
      try {
        // Send notification to info@datawaveconsultancy.com
        const notificationMsg = {
          to: 'info@datawaveconsultancy.com',
          from: 'noreply@datawaveconsultancy.com',
          subject: `New Contact Request from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Organization:</strong> ${escapeHtml(organization || 'Not specified')}</p>
            <h3>Message:</h3>
            <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
          `,
        };

        await sgMail.send(notificationMsg);
        console.log('Notification email sent to info@datawaveconsultancy.com');

        // Send confirmation email to user
        const confirmationMsg = {
          to: email,
          from: 'noreply@datawaveconsultancy.com',
          subject: 'We received your request - Datawave Consultancy',
          html: `
            <p>Hi ${escapeHtml(name)},</p>
            <p>Thank you for reaching out to Datawave Consultancy. We have received your request and will respond with clarity on scope, timelines, and next steps.</p>
            <p>Best regards,<br>Datawave Team</p>
          `,
        };

        await sgMail.send(confirmationMsg);
        console.log('Confirmation email sent to user');
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        // Don't fail the submission if email fails
      }
    } else {
      console.log('SENDGRID_API_KEY not configured. Submission stored but emails not sent.');
    }

    return res.status(200).json({
      success: true,
      message: 'Request submitted successfully. We will review your request and get back to you soon.',
      id: submission.id,
    });
  } catch (error) {
    console.error('Error processing submission:', error);
    return res.status(500).json({
      error: 'Failed to process submission. Please try again.',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
