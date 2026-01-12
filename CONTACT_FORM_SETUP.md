# Contact Form Setup Guide

## What's Changed

The contact form now:
1. ✅ Collects form submissions in a backend database
2. ✅ Sends email notifications to info@datawaveconsultancy.com
3. ✅ Sends confirmation emails to users who submit the form

## Setup Instructions

### 1. Add Environment Variables to Vercel

Go to your Vercel project settings and add these environment variables:

```
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

### 2. Get Gmail App Password

If using Gmail:
1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" and "Windows Computer" (or your device)
3. Google will generate a 16-character password
4. Use this as your `EMAIL_PASSWORD` in Vercel

### 3. Alternative Email Providers

If not using Gmail, you can use other services:

**SendGrid:**
```
EMAIL_SERVICE=SendGrid
SENDGRID_API_KEY=your_api_key
```

**Resend (recommended for transactional emails):**
```
RESEND_API_KEY=your_api_key
```

**Mailgun:**
```
EMAIL_SERVICE=mailgun
MAILGUN_DOMAIN=your_domain
MAILGUN_API_KEY=your_api_key
```

## How It Works

1. User fills out the form on the website
2. Form data is sent to `/api/submit-contact` (Vercel Function)
3. Backend stores the request
4. Email notification sent to info@datawaveconsultancy.com
5. Confirmation email sent to the user
6. Success message displayed to user

## File Structure

```
/api
  submit-contact.ts    - Backend API endpoint
/src
  app/components/
    ContactForm.tsx    - Updated form component
```

## Testing Locally

```bash
npm run dev
# Visit http://localhost:5173 and test the form
```

The API will work with Vercel Functions automatically on deployment.
