import React from 'react';
import { ContactEmailTemplate } from '@/components/contact-email-template';
import ReactDOMServer from 'react-dom/server';
import { type ContactEmailTemplateProps } from '@/types';

export function renderEmailTemplate(props: ContactEmailTemplateProps) {
  return ReactDOMServer.renderToStaticMarkup(
    <ContactEmailTemplate {...props} />
  );
}
