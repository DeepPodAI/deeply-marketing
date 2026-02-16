import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Step 1: Create contact in Resend
    const { data: contactData, error: contactError } = await resend.contacts.create({
      email: email,
    });

    if (contactError) {
      console.error('Resend contact creation error:', contactError);
      return NextResponse.json(
        { error: 'Failed to add email to waitlist. Please try again.' },
        { status: 500 }
      );
    }

    // Step 2: Send notification email to team
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/Toronto',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    const { error: emailError } = await resend.emails.send({
      from: process.env.NOTIFICATION_FROM_EMAIL as string,
      to: process.env.NOTIFICATION_EMAIL_TO as string,
      cc: process.env.NOTIFICATION_EMAIL_CC as string,
      subject: `New waitlist signup: ${email}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0abaff; margin-bottom: 20px;">🌊 New Waitlist Signup</h2>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0; color: #666; font-size: 14px;">Email Address:</p>
            <p style="margin: 0; font-size: 18px; font-weight: 600; color: #0a2461;">${email}</p>
          </div>
          <p style="color: #666; font-size: 14px; margin: 10px 0;">
            <strong>Signed up:</strong> ${timestamp}
          </p>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
          <p style="color: #999; font-size: 12px; margin: 0;">
            View all contacts in your <a href="https://resend.com/contacts" style="color: #0abaff;">Resend Dashboard</a>
          </p>
        </div>
      `,
    });

    if (emailError) {
      console.error('Resend email notification error:', emailError);
      // Don't fail the request if notification fails - contact was still created
    }

    return NextResponse.json(
      { success: true, message: 'Successfully added to waitlist!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
