import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SEO from "../components/SEO";
import { usePortfolioData } from "../hooks/usePortfolioData";

function Experience() {
  const { data } = usePortfolioData();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const { experience } = data;

  return (
    <section className="experience" data-aos="fade-up" aria-label="Experience and education timeline">
      <SEO
        title="Experience"
        description="Education, work experience, and certifications — Stephen Odhiambo Oginga. Apprentice Software Developer at Zone01 Kisumu."
        ogUrl="https://steodhiambo.com/experience"
      />
      <VerticalTimeline lineColor="#3e497a">
        {experience.map((item) => (
          <VerticalTimelineElement
            key={item.id}
            className={`vertical-timeline-element--${item.type}`}
            date={`${item.startDate} - ${item.endDate}`}
            iconStyle={{
              background: item.type === 'work' ? "#e9d35b" : item.type === 'certification' ? "#4caf50" : "#3e497a",
              color: "#fff"
            }}
            icon={item.type === 'work' ? <WorkIcon /> : item.type === 'certification' ? <EmojiEventsIcon /> : <SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              {item.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {item.institution} - {item.location}
            </h4>
            <p>{item.description}</p>
            {item.achievements && (
              <ul>
                {item.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
