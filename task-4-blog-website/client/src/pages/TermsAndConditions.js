import React from 'react';
import './StaticPage.css'; // Reusing the same CSS file

const TermsAndConditions = () => {
  return (
    <div className="static-page-container">
      <h1>Terms and Conditions</h1>
      <p className="last-updated">Last updated: August 2025</p>

      <h2 className="page-subtitle">1. Acceptance of Terms</h2>
      <p>By accessing and using this blog, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these, you should not use this service.</p>

      <h2 className="page-subtitle">2. Intellectual Property</h2>
      <p>The content, logos, and other visual media created for this blog is our property and is protected by copyright laws. You may not reproduce or distribute any content without our prior written permission.</p>

      <h2 className="page-subtitle">3. User Conduct</h2>
      <p>You agree not to use the website to post or transmit any material which is defamatory, offensive, or of an obscene or menacing character, or which may, in our judgment, cause annoyance, inconvenience or needless anxiety to any person.</p>

      <h2 className="page-subtitle">4. Disclaimer of Warranties</h2>
      <p>The information on this blog is provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.</p>

      <h2 className="page-subtitle">5. Governing Law</h2>
      <p>Any claim relating to this blog shall be governed by the laws of Pakistan without regard to its conflict of law provisions.</p>
    </div>
  );
};

export default TermsAndConditions;