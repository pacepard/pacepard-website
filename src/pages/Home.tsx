import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import GetStartedButton from "../components/common/GetStartedButton";
import Footer from "../components/Footer";
import FeatureSection from "../components/sections/FeatureSection";
import CTASection from "../components/sections/CTASection";

const Home: React.FC = () => {
  const features = [
    {
      icon: "zap",
      title: "Boost Developer Adoption and Usage",
      description:
        "Increase API usage with personalized challenges, rewards, and insights that keep developers coming back.",
    },
    {
      icon: "activity",
      title: " Usage Tracking and Analytics",
      description:
        "Know exactly which developers are serious about your API through our API usage milestones.",
    }, // change gift icon
    {
      icon: "gift",
      title: "Real-Time API Performance & Insights",
      description:
        "Track API performance and developer activity in real time to improve API experience and make data-driven decisions.",
    },
  ];

  const featuresTwo = [
    {
      icon: "target",
      title: "Boost your projects with APIs usage perks",
      description:
        "Test, build, and power your projects, experiments, or the next big startup idea.",
    },
    {
      icon: "briefcase",
      title: "Turn your contributions into Rewards",
      description:
        "Work on real challenges, complete projects, and create a portfolio that gets you hired.",
    },
    {
      icon: "users",
      title: "Work with teams on real-world problems",
      description:
        "Solve real-industry challenges side-by-side with cross-functional teams.",
    },
  ];

  const featuresThree = [
    {
      icon: "code",
      title: "Measure Competency, Not Course Completion",
      description:
        "Track real skill growth with problem-sets completion milestones, and project-based evaluations.",
    },
    {
      icon: "users",
      title: "Bridge the Gap Between Learning & Hiring",
      description:
        "Ensure graduates have job-ready skills with verified project completions and employer-backed validation.",
    },
    {
      icon: "shield",
      title: "Scale Your Impact & Attract More Learners",
      description:
        "Offer cutting-edge learning programs that leverages industry partners from around the world.",
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
                    <h1>Turn one-time</h1>
                    <div className="title-box">
                      <h1>API Users</h1>
                      <div className="corner-dot top-right"></div>
                      <div className="corner-dot bottom-right"></div>
                      <div className="corner-dot bottom-left"></div>
                      <div className="corner-dot top-left"></div>
                    </div>
                    <h2>into</h2>
                    <div className="title-box">
                      <h2>Loyal Developers</h2>
                      <div className="corner-dot top-right"></div>
                      <div className="corner-dot bottom-right"></div>
                      <div className="corner-dot bottom-left"></div>
                      <div className="corner-dot top-left"></div>
                    </div>
                    <h2>&nbsp;with</h2>
                    <h2> gamified engagement and rewards</h2>
                  </div>
                  <p className="hero-description">
                    <span>
                      Struggling with developer retention? Pacepard tracks API
                      usage
                    </span>
                    <span>
                      milestones and automatically reward active developers—so
                      they keep coming back.
                    </span>
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
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="16"
                          rx="2"
                          stroke="#030333"
                          stroke-width="1.5"
                        />

                        <line
                          x1="3"
                          y1="9"
                          x2="21"
                          y2="9"
                          stroke="#030333"
                          stroke-width="1.5"
                        />

                        <line
                          x1="7"
                          y1="2"
                          x2="7"
                          y2="6"
                          stroke="#030333"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <line
                          x1="17"
                          y1="2"
                          x2="17"
                          y2="6"
                          stroke="#030333"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />

                        <circle cx="7" cy="13" r="1.5" fill="#030333" />
                        <circle cx="12" cy="13" r="1.5" fill="#030333" />
                        <circle cx="17" cy="13" r="1.5" fill="#030333" />
                        <circle cx="7" cy="17" r="1.5" fill="#030333" />
                        <circle cx="12" cy="17" r="1.5" fill="#030333" />
                        <circle cx="17" cy="17" r="1.5" fill="#030333" />
                      </svg>
                      Book a Demo
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
        subtitle="Stop wasting money on random developer marketing — focus on the right users with AI-powered insights and engagement tools."
        features={features}
        image="/images/pacepard-website-dashboardx.png"
        TagText="API Companies"
        TagBgColor="#ccfdff"
        TagTextColor=""
      />

      <FeatureSection
        title={
          <>
            Turn every <br /> API usage into meaningful Rewards
          </>
        }
        subtitle="Every API call, project, and contribution counts — earn credits, perks, and exclusive opportunities as you build."
        features={featuresTwo}
        image="/images/pacepard-website-dashboard.png"
        TagText="Developers"
        TagBgColor="#f3faca"
        TagTextColor=""
      />

      <FeatureSection
        title="Train job-ready developers with real-industry problem sets"
        subtitle="Prepare your learners for real-world tech roles with hands-on industry projects and competency-driven challenges."
        features={featuresThree}
        image="/images/pacepard-website-dashboardy.png"
        TagText="EdTech Companies"
        TagBgColor="#f1ffee"
        TagTextColor=""
      />

      <CTASection />
      <Footer />
    </>
  );
};

export default Home;
