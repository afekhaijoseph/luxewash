import React from 'react';

function PrivacyPolicy() {
  return (
    <article className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 font-lato text-gray-700">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-10">
        <h1 className="text-3xl font-bold mb-6">LuxeWash Privacy Policy</h1>
        <p className="mb-4">
          <strong>Effective Date:</strong> June 18, 2025
        </p>
        <p className="mb-8">
          LuxeWash ("we," "us," or "our") provides laundry and dry-cleaning services through a WhatsApp-based chatbot. This Privacy Policy describes how we collect, use, share, and protect your personal information when you use our services via WhatsApp or our website{' '}
          <a href="https://dashboard.luxewash.com" className="text-blue-600 hover:underline">
            dashboard.luxewash.com
          </a>.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="mb-4">We collect information to deliver and enhance our services:</p>
          <ul className="list-disc pl-6">
            <li><strong>Contact Information:</strong> Your WhatsApp phone number for chatbot communication.</li>
            <li><strong>Conversation Data:</strong> Messages, including service choices (e.g., wash types), pickup locations, and times.</li>
            <li><strong>Usage Data:</strong> Interaction details (e.g., timestamps, metadata) to improve our chatbot.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc pl-6">
            <li>Fulfill laundry requests (e.g., scheduling pickups).</li>
            <li>Communicate via WhatsApp (e.g., order updates).</li>
            <li>Analyze usage to enhance services.</li>
            <li>Meet legal or dispute resolution needs.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Share Your Information</h2>
          <p className="mb-4">We do not sell or rent your data. We share it only when:</p>
          <ul className="list-disc pl-6">
            <li><strong>Service Providers:</strong> Sharing with agents for order fulfillment (e.g., location for pickups).</li>
            <li><strong>Legal Requirements:</strong> Required by law or to protect our rights.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Storage and Security</h2>
          <p>
            Your data is stored in a secure MongoDB database with encryption. We take reasonable measures to protect it, but no system is fully secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
          <p className="mb-4">You can:</p>
          <ul className="list-disc pl-6">
            <li><strong>Access:</strong> Request your data.</li>
            <li><strong>Correct:</strong> Fix inaccurate data.</li>
            <li><strong>Delete:</strong> Request data deletion, subject to legal obligations.</li>
          </ul>
          <p>Contact us below to exercise these rights.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Third-Party Services</h2>
          <p>
            We use WhatsApp (Meta) for communication, subject to{' '}
            <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              WhatsApp’s Privacy Policy
            </a>. Data is stored in MongoDB, subject to{' '}
            <a href="https://www.mongodb.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              MongoDB’s Privacy Policy
            </a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Changes to This Privacy Policy</h2>
          <p>
            We may update this policy and notify you via WhatsApp or our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="mb-4">For questions about this Privacy Policy, contact:</p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:support@luxewash.com" className="text-blue-600 hover:underline">
                  support@luxewash.com
                </a>
              </li>
              <li><strong>Phone:</strong> +2349161497203</li>
              <li><strong>Address:</strong> LuxeWash, Lagos, Nigeria</li>
            </ul>
          </div>
        </section>
      </div>
    </article>
  );
}

export default PrivacyPolicy;