import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validation/contact-schema';

/**
 * POST /api/contact
 * Handles contact form submissions
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the form data
    const validated = contactSchema.parse(body);

    // TODO: Send email using your preferred service (Resend, SendGrid, etc.)
    // Example with Resend:
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'hello@momin.dev',
      subject: `New Contact Form Submission from ${validated.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validated.name}</p>
        <p><strong>Email:</strong> ${validated.email}</p>
        <p><strong>Budget:</strong> ${validated.budget || 'Not specified'}</p>
        <p><strong>Project Details:</strong></p>
        <p>${validated.projectDetails}</p>
      `,
    });
    */

    // For now, just log the submission (replace with actual email service)
    console.log('Contact form submission:', validated);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! I\'ll get back to you soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    // Check if it's a validation error
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid form data. Please check your inputs.',
        },
        { status: 400 }
      );
    }

    // Generic error response
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again later.',
      },
      { status: 500 }
    );
  }
}
