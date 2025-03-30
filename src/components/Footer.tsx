import React from 'react';
import './Footer.css';
import PacepardLogoWhite from '../assets/pacepard-logo-white.svg';
import { Twitter, Linkedin, GitHub, Youtube, Code, Users, BookOpen, Shield } from 'react-feather';

const Footer = () => {
  return (
    <footer className="pacepard-footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="logo-social">
            <img src={PacepardLogoWhite} alt="Pacepard Logo" className="logo" />
            <p className="footer-description">
              Empowering API companies to build engaged developer communities through AI-driven insights and rewards.
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Twitter"><Twitter size={16} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href="#" aria-label="GitHub"><GitHub size={16} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={16} /></a>
            </div>
          </div>
        </div>
        <div className="footer-columns">
          <div className="column">
            <p><Code size={24} /> API COMPANIES & DEVTOOLS</p>
            <a href="#">How It Works</a>
            <a href="#">Developer Engagement & Rewards</a>
            <a href="#">Pricing</a>
            <a href="#">Case Studies</a>
            <a href="#">API Integration Guide</a>
            <a href="#">Success Stories</a>
          </div>
          <div className="separator"></div>
          <div className="column">
            <p><Users size={24} /> DEVELOPERS & TECH TALENTS</p>
            <a href="#">Join API Challenges</a>
            <a href="#">Leaderboard & Rewards</a>
            <a href="#">Developer Community</a>
            <a href="#">Portfolio Building</a>
            <a href="#">API Documentation</a>
            <a href="#">Learning Resources</a>
          </div>
          <div className="separator"></div>
          <div className="column">
            <p><BookOpen size={24} /> FOR EDTECH COMPANIES</p>
            <a href="#">Pacepard for Learning Platforms</a>
            <a href="#">Job-Ready API Training</a>
            <a href="#">EdTech Partnerships</a>
            <a href="#">Integration Solutions</a>
            <a href="#">Student Success Stories</a>
          </div>
          <div className="separator"></div>
          <div className="column">
            <p><Shield size={24} /> COMPANY & LEGAL</p>
            <a href="#">About Pacepard</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Security & Compliance</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Pacepard. All rights reserved.</p>
        <p>With love from Lagos, Nigeria</p>
      </div>
    </footer>
  );
};

export default Footer;