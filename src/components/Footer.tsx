import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="figma-footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="logo-social">
            <img src="figma-logo.svg" alt="Figma Logo" className="logo" />
            <div className="social-icons">
              <a href="#"><img src="x-icon.svg" alt="X Icon" /></a>
              <a href="#"><img src="youtube-icon.svg" alt="YouTube Icon" /></a>
              <a href="#"><img src="instagram-icon.svg" alt="Instagram Icon" /></a>
              <a href="#"><img src="facebook-icon.svg" alt="Facebook Icon" /></a>
            </div>
          </div>
        </div>
        <div className="footer-columns">
          <div className="column">
            <p>PRODUCT</p>
            <a href="#">Figma Design</a>
            <a href="#">FigJam</a>
            <a href="#">Dev Mode</a>
            <a href="#">Figma Slides</a>
            <a href="#">Release notes</a>
            <a href="#">Downloads</a>
            <p>PLANS</p>
            <a href="#">Pricing</a>
            <a href="#">Enterprise</a>
            <a href="#">Organization</a>
            <a href="#">Professional</a>
          </div>
          <div className="column">
            <p>USE CASES</p>
            <a href="#">UI design</a>
            <a href="#">UX design</a>
            <a href="#">Wireframing</a>
            <a href="#">Diagramming</a>
            <a href="#">Prototyping</a>
            <a href="#">Brainstorming</a>
            <a href="#">Presentation maker</a>
            <a href="#">Online whiteboard</a>
            <a href="#">Agile</a>
            <a href="#">Strategic planning</a>
            <a href="#">Mind mapping</a>
          </div>
          <div className="column">
            <p>RESOURCES</p>
            <a href="#">Blog</a>
            <a href="#">Best practices</a>
            <a href="#">Color wheel</a>
            <a href="#">Colors</a>
            <a href="#">Color picker</a>
            <a href="#">Color palettes</a>
            <a href="#">Color palette generator</a>
            <a href="#">Color contrast checker</a>
            <a href="#">Templates</a>
            <a href="#">Developers</a>
            <a href="#">Integrations</a>
            <a href="#">Resource library</a>
            <a href="#">Reports and insights</a>
            <a href="#">Support</a>
            <a href="#">Status</a>
            <a href="#">Legal and privacy</a>
            <a href="#">Modern slavery statement</a>
            <a href="#">Climate disclosure statement</a>
          </div>
          <div className="column">
            <p>COMPARE</p>
            <a href="#">Sketch</a>
            <a href="#">Adobe XD</a>
            <a href="#">Framer</a>
            <a href="#">Miro</a>
            <p>COMPANY</p>
            <a href="#">About us</a>
            <a href="#">Events</a>
            <a href="#">Customers</a>
            <a href="#">Careers</a>
            <a href="#">Newsroom</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <a href="#">Cookies settings</a>
        <a href="#">
          <img src="globe-icon.svg" alt="Globe Icon" /> English
        </a>
      </div>
    </footer>
  );
};

export default Footer;