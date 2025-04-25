'use client'; // Required for useEffect

import React, { useState, useEffect } from 'react';
import PageHeader from '@/components/shared/PageHeader';

// Basic structure for the Privacy Policy content
const PrivacyPolicyContent = () => {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    // Set the date only on the client-side after mounting
    setLastUpdated(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="prose prose-lg mx-auto max-w-3xl lg:prose-xl dark:prose-invert">
      <h2>Introduction</h2>
      <p>
        Welcome to Cobi Automation's Privacy Policy. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
      </p>

      <h2>1. Important Information and Who We Are</h2>
      <p>
        <strong>Purpose of this Privacy Policy:</strong> This privacy policy aims to give you information on how Cobi Automation collects and processes your personal data through your use of this website, including any data you may provide through this website when you sign up for our newsletter, purchase a service, or contact us.
      </p>
      <p>
        <strong>Controller:</strong> Cobi Automation is the controller and responsible for your personal data (collectively referred to as "Cobi Automation", "we", "us" or "our" in this privacy policy).
      </p>
      <p>
        <strong>Contact Details:</strong> Our full details are:
        <br />
        Full name of legal entity: [Your Full Legal Entity Name Here] {/* Placeholder */}
        <br />
        Email address: [Your Privacy Contact Email, e.g., privacy@cobiautomation.com] {/* Placeholder */}
        <br />
        Postal address: [Your Physical Address Here] {/* Placeholder */}
      </p>

      <h2>2. The Data We Collect About You</h2>
      <p>
        Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data). We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
      </p>
      <ul>
        <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
        <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
        <li><strong>Business Data</strong> includes information about your business you provide when contacting us.</li>
        <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
        <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
        <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
      </ul>

      <h2>3. How We Use Your Personal Data</h2>
      <p>
        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
      </p>
      <ul>
          <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
          <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          <li>Where we need to comply with a legal obligation.</li>
      </ul>
      {/* Add more sections as needed: Data Security, Data Retention, Your Legal Rights, etc. */}
      <h2>4. Data Security</h2>
      <p>
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.
      </p>
        <h2>5. Your Legal Rights</h2>
        <p>
          Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, or to object to processing.
        </p>

      <p><em>This is a basic template. You should consult with a legal professional to ensure your Privacy Policy is comprehensive and compliant with all applicable laws and regulations (e.g., GDPR, CCPA).</em></p>
      {/* Render date only after client-side mount */}
      {lastUpdated && <p><strong>Last updated:</strong> {lastUpdated}</p>}

    </div>
  );
};


export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <PrivacyPolicyContent />
        </div>
      </section>
    </>
  );
}
