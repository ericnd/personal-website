import { type ContactEmailTemplateProps } from '@/types';

// ✅ Return raw HTML string instead of JSX
export function ContactEmailTemplate({
  firstName,
  lastName,
  email,
  message,
}: ContactEmailTemplateProps): string {
  return `
    <div>
      <h1>Contact Message</h1>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    </div>
  `;
}
