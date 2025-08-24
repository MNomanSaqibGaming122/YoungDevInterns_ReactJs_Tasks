import React from "react";
import "./PrivacyPolicy.css"; // Import the new CSS file

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="last-updated">Last updated: January 2025</p>

      <p>
        Welcome to <strong>My Blog</strong>. Your privacy is important to us. This Privacy Policy
        explains how we collect, use, and protect your information when you use our website.
      </p>

      <h2 className="privacy-subtitle">Information We Collect</h2>
      <ul>
        <li>Personal information you provide (such as name, email, account details).</li>
        <li>Usage data like IP address, browser type, and pages visited.</li>
        <li>Cookies and tracking technologies to improve user experience.</li>
      </ul>

      <h2 className="privacy-subtitle">How We Use Your Information</h2>
      <ul>
        <li>To provide and maintain our services.</li>
        <li>To improve and personalize the website.</li>
        <li>To send updates, newsletters, or important notifications (if subscribed).</li>
        <li>To ensure security and prevent fraud.</li>
      </ul>

      <h2 className="privacy-subtitle">Data Sharing</h2>
      <p>
        We do not sell or trade your personal information. Data may only be shared with trusted
        third-party services that help us operate our website, provided they agree to keep your
        information confidential.
      </p>

      <h2 className="privacy-subtitle">Cookies</h2>
      <p>
        We use cookies to enhance your browsing experience. You may disable cookies in your browser,
        but some parts of the site may not function properly.
      </p>

      <h2 className="privacy-subtitle">Your Rights</h2>
      <p>
        You have the right to access, update, or delete your personal information. If you wish to
        exercise these rights, please contact us at: <strong>support@myblog.com</strong>
      </p>

      <h2 className="privacy-subtitle">Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted on this page
        with the updated date.
      </p>

      <h2 className="privacy-subtitle">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at:{" "}
        <strong>support@myblog.com</strong>
      </p>
    </div>
  );
};

export default PrivacyPolicy;