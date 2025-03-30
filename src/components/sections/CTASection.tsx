import React from 'react';
import GetStartedButton from '../common/GetStartedButton';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready to get started?</h2>
        <p>Create an account instantly to get started or contact us to design a custom package for your business.</p>
        <div className="cta-buttons">
          <GetStartedButton variant="hero" />
          <button className="secondary-button">
            Contact sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;