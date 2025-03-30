import React from "react";
import GetStartedButton from "../common/GetStartedButton";
import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready to get started?</h2>
        <p>
          Create an account instantly to get started or contact us to design a
          custom package for your business.
        </p>
        <div className="cta-buttons">
          <GetStartedButton variant="hero" />
          <button className="secondary-button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="8"
                r="4"
                stroke="#030333"
                stroke-width="1.5"
              />

              <path
                d="M4 20C4 16.6863 7.13401 14 11 14H13C16.866 14 20 16.6863 20 20"
                stroke="#030333"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            Contact sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
