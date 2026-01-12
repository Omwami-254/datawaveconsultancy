# Contact Form Setup Guide

## What's Changed

The contact form now:
1. ✅ Collects form submissions in the backend
2. ✅ Sends email notifications to info@datawaveconsultancy.com
3. ✅ Sends confirmation emails to users who submit the form
4. ✅ Works immediately without configuration (though emails need setup)

## How It Works

1. User fills out the form on the website
2. Form data is sent to `/api/submit-contact` (Vercel Function)
3. Backend stores the request and validates it
4. If Resend API key is configured, emails are sent:
   - Notification email to info@datawaveconsultancy.com
   - Confirmation email to the user
5. Success message is displayed to the user

## Setup Instructions

### Without Email (Form works but no emails)

The form will work immediately and submissions will be processed, but email notifications won't be sent until you configure an email provider.

### With Email Notifications (Recommended)

#### Option 1: Using Resend (Easiest)

1. **Sign up for Resend**
   - Go to https://resend.com
   - Create a free account
   - Get your API key from the dashboard

2. **Add to Vercel Environment Variables**
   - Go to your Vercel project settings
   - Navigate to Environment Variables
   - Add: `RESEND_API_KEY=your_api_key_here`
   - Redeploy your project

3. **Verify Domain (Optional but recommended)**
   - In Resend dashboard, verify your domain
   - This increases email deliverability

#### Option 2: Using Gmail with SendGrid

1. Get API key from SendGrid
2. Add to Vercel: `SENDGRID_API_KEY=your_key`
3. Update the API endpoint to use SendGrid

## Testing Locally

```bash
npm run dev
# Visit http://localhost:5173 and test the form
```

### Local Testing Without Email

The form will submit and show success even without email configured:

```bash
# Check the terminal/console for submission logs
```

## File Structure

```
/api
  submit-contact.ts    - Backend API endpoint
/src
  app/components/
    ContactForm.tsx    - Form component
```

## Troubleshooting

### Form not submitting
- Check browser console (F12) for errors
- Verify the API endpoint is `/api/submit-contact`
- Check Network tab to see the POST request

### Emails not being sent
- Verify `RESEND_API_KEY` is set in Vercel environment variables
- Check that the domain is verified in Resend dashboard
- Check Vercel function logs for errors

### CORS errors
- The API is configured to handle CORS
- Make sure requests are being sent to `/api/submit-contact`

## Environment Variables

```
RESEND_API_KEY=your_resend_api_key_here
```

Get your key from: https://resend.com/api-keys
