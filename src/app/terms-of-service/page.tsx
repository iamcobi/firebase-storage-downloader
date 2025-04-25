import PageHeader from '@/components/shared/PageHeader';

// Basic structure for the Terms of Service content
const TermsOfServiceContent = () => (
  <div className="prose prose-lg mx-auto max-w-3xl lg:prose-xl dark:prose-invert">
    <h2>1. Introduction</h2>
    <p>
      Welcome to Cobi Automation. These Terms of Service ("Terms") govern your access to and use of the Cobi Automation website and services (collectively, the "Service"). Please read these Terms carefully before using the Service. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
    </p>

    <h2>2. Use of Service</h2>
    <p>
      You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
    </p>
    <ul>
      <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
      <li>To exploit, harm, or attempt to exploit or harm minors in any way by exposing them to inappropriate content, asking for personally identifiable information, or otherwise.</li>
      <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
      <li>To impersonate or attempt to impersonate Cobi Automation, a Cobi Automation employee, another user, or any other person or entity.</li>
    </ul>

    <h2>3. Intellectual Property Rights</h2>
    <p>
      The Service and its original content, features, and functionality are and will remain the exclusive property of Cobi Automation and its licensors. The Service is protected by copyright, trademark, and other laws of both the [Your Country] and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Cobi Automation.
    </p>

    <h2>4. Service Provision and Payment</h2>
     <p>
      Details regarding specific service tiers, scope of work, deliverables, timelines, and payment terms will be outlined in a separate Service Agreement or Statement of Work ("SOW") agreed upon by both parties. Payment is due according to the terms specified in the SOW. Failure to make timely payments may result in suspension or termination of services.
    </p>

     <h2>5. Confidentiality</h2>
     <p>
       Both parties agree to maintain the confidentiality of any proprietary or sensitive information disclosed during the provision of services. This includes business processes, data, strategies, and technical details related to the automation solutions developed.
     </p>

    <h2>6. Limitation of Liability</h2>
    <p>
      In no event shall Cobi Automation, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
    </p>

     <h2>7. Termination</h2>
     <p>
       We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Specific termination clauses related to service projects will be detailed in the SOW.
     </p>

    <h2>8. Governing Law</h2>
    <p>
      These Terms shall be governed and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions.
    </p>

    <h2>9. Changes to Terms</h2>
    <p>
      We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
    </p>

    <h2>10. Contact Us</h2>
    <p>
      If you have any questions about these Terms, please contact us at [Your Contact Email, e.g., legal@cobiautomation.com].
    </p>

    <p><em>This is a basic template. You should consult with a legal professional to ensure your Terms of Service are comprehensive, legally sound, and tailored to your specific business operations and jurisdiction.</em></p>
    <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
  </div>
);


export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader title="Terms of Service" />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <TermsOfServiceContent />
        </div>
      </section>
    </>
  );
}
