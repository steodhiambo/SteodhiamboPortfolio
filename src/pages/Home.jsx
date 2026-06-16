import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import SpeedIcon from "@mui/icons-material/Speed";
import GroupIcon from "@mui/icons-material/Group";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import "../styles/Home.css";
import profileWebp from "../assets/profile.webp";
import profile from "../assets/profile.JPG";
import SEO from "../components/SEO";
import { usePortfolioData } from "../hooks/usePortfolioData";

function Home() {
  const { data } = usePortfolioData();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const { personal, skills, metrics } = data;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    jobTitle: personal.title,
    description: personal.bio,
    email: personal.email,
    url: "https://steodhiambo.com",
    sameAs: [personal.linkedin, personal.github],
    knowsAbout: [...new Set([...skills.frontend, ...skills.backend, ...skills.languages, ...skills.ai, ...skills.tools])],
    address: {
      "@type": "PostalAddress",
      addressLocality: personal.location,
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Stephen Odhiambo — Portfolio",
    url: "https://steodhiambo.com",
    description: personal.bio,
    author: { "@type": "Person", name: personal.name },
  };

  const metricsData = [
    { icon: <CodeIcon />, value: metrics.projectsDelivered, label: "Projects Delivered", suffix: "" },
    { icon: <StorageIcon />, value: metrics.dataProcessingRate, label: "Data Processing", suffix: "" },
    { icon: <SpeedIcon />, value: metrics.performanceImprovement, label: "Manual Error Reduction", suffix: "" },
    { icon: <GroupIcon />, value: metrics.teamSizeLed, label: "Team Size Led", suffix: "+" },
  ];

  return (
    <>
      <SEO
        title="Full-Stack Developer — AI Integration"
        description={personal.bio}
        ogImage={profile}
        jsonLd={[personSchema, websiteSchema]}
      />
      <section className="about" aria-label="About me">
        <div className="about-content">
          <picture>
            <source srcSet={profileWebp} type="image/webp" />
            <img src={profile} alt={personal.name} className="profile-image" loading="lazy" width="280" height="280" decoding="async" />
          </picture>
          <div className="text-content">
            <h2 data-aos="fade-right">
              {personal.name}
            </h2>
            <p className="tagline" data-aos="fade-right" data-aos-delay="50">
              I build software that solves real business problems — from financial tools for small businesses to AI-powered content engines. Every project I ship is measured by the results it delivers.
            </p>
            <p className="bio" data-aos="fade-right" data-aos-delay="100">{personal.bio}</p>

          </div>
        </div>
      </section>

      <section className="metrics" aria-label="Key metrics" data-aos="fade-up">
        <div className="metrics-grid">
          {metricsData.map((m, i) => (
            <div className="metric-card" key={i}>
              <span className="metric-icon">{m.icon}</span>
              <span className="metric-value">{m.value}{m.suffix}</span>
              <span className="metric-label">{m.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="skills" data-aos="fade-up" data-aos-delay="100" aria-label="Technical skills">
        <h1>Skills & Depth</h1>
        <ol className="list">
          <li className="item" data-aos="fade-right" data-aos-delay="100">
            <h2>Front-End</h2>
            <span className="skill-detail">{skills.frontend.join(", ")}</span>
          </li>
          <li className="item" data-aos="fade-left" data-aos-delay="150">
            <h2>Back-End</h2>
            <span className="skill-detail">{skills.backend.join(", ")}</span>
          </li>
          <li className="item" data-aos="fade-right" data-aos-delay="200">
            <h2>Languages</h2>
            <span className="skill-detail">{skills.languages.join(", ")}</span>
          </li>
          <li className="item" data-aos="fade-left" data-aos-delay="250">
            <h2>Tools & Platforms</h2>
            <span className="skill-detail">{skills.tools.join(", ")}</span>
          </li>
          <li className="item" data-aos="fade-right" data-aos-delay="300">
            <h2>AI Integration</h2>
            <span className="skill-detail">{skills.ai.join(", ")}</span>
          </li>
        </ol>

      </section>
    </>
  );
}

export default Home;
