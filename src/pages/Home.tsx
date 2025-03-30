import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import GetStartedButton from "../components/common/GetStartedButton";
import Footer from "../components/Footer";
import FeatureSection from "../components/sections/FeatureSection";
import CTASection from '../components/sections/CTASection';

const Home: React.FC = () => {
  const features = [
    {
      icon: "activity",
      title: "AI-Powered Sales Assessment",
      description:
        "Track real-time sales performance metrics to identify top-performing candidates instantly.",
    },
    {
      icon: "target",
      title: "Smart Performance Tracking",
      description:
        "Evaluate sales skills automatically through discovery calls, negotiations, and closing rates.",
    },
    {
      icon: "zap",
      title: "Sales Performance Dashboard",
      description:
        "Get instant insights into candidate performance and identify areas for improvement.",
    },
  ];

  const featuresTwo = [
    {
      icon: "activity",
      title: "Who’s actively integrating your API",
      description:
        "Track real-time sales performance metrics to identify top-performing candidates instantly.",
    },
    {
      icon: "target",
      title: "Which developers are scaling API usage",
      description:
        "Evaluate sales skills automatically through discovery calls, negotiations, and closing rates.",
    },
    {
      icon: "zap",
      title: " Mini-challenges that reward API adoption",
      description:
        "Get instant insights into candidate performance and identify areas for improvement.",
    },
  ];

  const featuresThree = [
    {
      icon: "activity",
      title: "AI-Powered Sales Assessment",
      description:
        "Track real-time sales performance metrics to identify top-performing candidates instantly.",
    },
    {
      icon: "target",
      title: "Smart Performance Tracking",
      description:
        "Evaluate sales skills automatically through discovery calls, negotiations, and closing rates.",
    },
    {
      icon: "zap",
      title: "Sales Performance Dashboard",
      description:
        "Get instant insights into candidate performance and identify areas for improvement.",
    },
  ];

  return (
    <>
      <div className="home-container">
        <section className="hero-section">
          <div className="hero-background">
            <div className="hex-container">
              {[...Array(300)].map(
                (
                  _,
                  index // Increased to 300 (25 columns × 12 rows)
                ) => (
                  <div key={index} className="hex-frame">
                    <div className="hex-polygon">
                      <div className="hex-line vertical"></div>
                      <div className="hex-line diagonal-1"></div>
                      <div className="hex-line diagonal-2"></div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <Container>
            <Row className="justify-content-center">
              <Col md={10} className="text-center">
                <div className="hero-content">
                  <div className="floating-names">
                    <div className="name-tag blue">front-end engineer</div>
                    <div className="name-tag green">full-stack Developer</div>
                    <div className="name-tag purple">Data Scientist</div>
                    <div className="name-tag cyan">mobile engineer</div>
                    <div className="name-tag pink">Product Manager</div>
                    <div className="name-tag indigo">
                      Technical Sales Manager
                    </div>
                  </div>

                  {/* Rest of the content remains the same */}
                  <div className="main-title">
                    <h1>Turn One-Time&nbsp;</h1>
                    <div className="title-box">
                      <h1>API Users</h1>
                      <div className="corner-dot top-right"></div>
                      <div className="corner-dot bottom-right"></div>
                      <div className="corner-dot bottom-left"></div>
                      <div className="corner-dot top-left"></div>
                    </div>
                    <h2>&nbsp;into</h2>
                    <div className="title-box">
                      <h2>loyal developers</h2>
                      <div className="corner-dot top-right"></div>
                      <div className="corner-dot bottom-right"></div>
                      <div className="corner-dot bottom-left"></div>
                      <div className="corner-dot top-left"></div>
                    </div>
                    <h2>&nbsp;with</h2>
                    <h2>AI-Driven Engagement & Rewards</h2>
                  </div>
                  <p className="hero-description">
                    <span>Struggling with developer retention? Pacepard uses AI to track API adoption</span>
                    <span>milestones and automatically reward active developers—so they keep coming back.</span>
                  </p>
                  <div className="hero-buttons">
                    <GetStartedButton variant="hero" />
                    <button className="hero-button secondary">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.5 12V16.5C15.5 17.33 14.83 18 14 18H5C4.17 18 3.5 17.33 3.5 16.5V7.5C3.5 6.67 4.17 6 5 6H14C14.83 6 15.5 6.67 15.5 7.5V12ZM15.5 12L20.5 7.5V16.5L15.5 12Z"
                          stroke="#3D25EF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      See how it works
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      <FeatureSection
        title="Grow loyal developers and build long-term retention."
        subtitle="Stop wasting money on random developer marketing—focus on the right users with AI-powered insights and engagement tools."
        features={features}
        image="/images/pacepard-website-dashboard.png"
      />

      <FeatureSection
        title="Grow loyal developers and build long-term retention."
        subtitle="Stop wasting money on random developer marketing—focus on the right users with AI-powered insights and engagement tools."
        features={featuresTwo}
        image="/images/pacepard-website-dashboardx.png"
      />

      <FeatureSection
        title="Grow loyal developers and build long-term retention."
        subtitle="Stop wasting money on random developer marketing—focus on the right users with AI-powered insights and engagement tools."
        features={featuresThree}
        image="/images/pacepard-website-dashboardy.png"
      />

      <CTASection />
      <Footer />
    </>
  );
};

export default Home;
