import { Resend } from 'resend';

// This is how your hosting platform will provide the API key.
// For local development, Vite might require a prefix like VITE_ if you were using Vite's dev server
// to directly serve this, but for dedicated serverless function environments,
// process.env.RESEND_API_KEY is standard.
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the expected structure of the form data
interface FormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

// This is a generic handler structure.
// For Vercel, it would be: export default async function handler(req, res) { ... }
// For Netlify, it would be: exports.handler = async function(event, context) { ... }
// You'll need to adapt this to your specific platform.

export async function processEmailRequest(requestBody: Partial<FormData>) { // Adapt parameters based on platform
  const { name, email, phone, service, message } = requestBody;

  // Basic validation
  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing required fields: name, email, and message.' }),
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Your Company <you@yourverifieddomain.com>', // Replace with your "From" address (must be a verified domain in Resend)
      to: ['owner-email@example.com'], // Replace with the owner's email address
      subject: `New Form Submission from ${name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      // You can also use the `react` property for more complex email templates:
      // react: EmailTemplate({ firstName: name, ... }),
    });

    if (error) {
      console.error({ error });
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Error sending email.', details: error.message }),
      };
    }

    console.log({ data });
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!', dataId: data?.id }),
    };
  } catch (exception) {
    console.error(exception);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An unexpected error occurred.' }),
    };
  }
}

// Example for Vercel (you'd typically put this in /api/send-email.ts)
/*
import type { VercelRequest, VercelResponse } from '@vercel/node';
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const result = await processEmailRequest(req.body);
  return res.status(result.statusCode).json(JSON.parse(result.body));
}
*/

// Example for Netlify (you'd typically put this in /functions/send-email.ts or /netlify/functions/send-email.ts)
/*
import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  try {
    const body = event.body ? JSON.parse(event.body) : {};
    return await processEmailRequest(body);
  } catch (e) {
    return { statusCode: 400, body: 'Invalid JSON body' };
  }
};
*/ 