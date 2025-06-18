import React from "react";

function DeleteDataPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 font-lato text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Data Deletion Instructions</h1>
      <p className="mb-4">
        If you wish to delete your personal data collected by LuxeWash through
        our WhatsApp services, please follow the steps below:
      </p>
      <ol className="list-decimal list-inside mb-4 space-y-2">
        <li>
          Send an email to{" "}
          <a
            href="mailto:luxewash@luxewashlaundry.com"
            className="text-blue-600 underline"
          >
            luxewash@luxewashlaundry.com
          </a>{" "}
          with the subject line: <strong>“Data Deletion Request”</strong>.
        </li>
        <li>
          Include your WhatsApp phone number and any relevant details so we can
          locate your data.
        </li>
        <li>
          We will process your request within <strong>7 business days</strong>{" "}
          and confirm once deletion is complete.
        </li>
      </ol>
      <p>
        For any questions, feel free to reach out via email at{" "}
        <a
          href="mailto:luxewash@luxewashlaundry.com"
          className="text-blue-600 underline"
        >
          luxewash@luxewashlaundry.com
        </a>
        .
      </p>
    </div>
  );
}

export default DeleteDataPage;
