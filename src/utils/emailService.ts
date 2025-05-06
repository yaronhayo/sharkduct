
import emailjs from 'emailjs-com';

// Initialize EmailJS with your user ID (get this from your EmailJS dashboard)
// This should be called once in your app, typically in your main entry file
export const initEmailJS = (userId: string) => {
  emailjs.init(userId);
};

export interface BookingEmailParams {
  name: string;
  phone: string;
  address: string;
  location: string;
  urgency: string;
  notes?: string;
  to_email: string; // Where to send the notification
}

export const sendBookingNotification = async (params: BookingEmailParams): Promise<{ success: boolean; message: string }> => {
  try {
    const templateParams = {
      name: params.name,
      phone: params.phone,
      address: params.address,
      location: params.location,
      urgency: params.urgency,
      notes: params.notes || 'No additional notes',
      to_email: params.to_email,
    };

    // Send the email using EmailJS
    // Replace 'your_service_id' and 'your_template_id' with actual values from EmailJS dashboard
    const response = await emailjs.send(
      'service_id', // Update this with your Service ID
      'template_id', // Update this with your Template ID
      templateParams
    );

    console.log('Email sent successfully:', response);
    return { success: true, message: 'Booking notification sent successfully!' };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, message: 'Failed to send email notification. Please try again.' };
  }
};
