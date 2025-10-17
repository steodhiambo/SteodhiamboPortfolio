import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { usePortfolioData } from "../hooks/usePortfolioData";

function Experience() {
  const { data, loading } = usePortfolioData();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const { experience } = data;

  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        {experience.map((item) => (
          <VerticalTimelineElement
            key={item.id}
            className={`vertical-timeline-element--${item.type}`}
            date={`${item.startDate} - ${item.endDate}`}
            iconStyle={{ 
              background: item.type === 'work' ? "#e9d35b" : "#3e497a", 
              color: "#fff" 
            }}
            icon={item.type === 'work' ? <WorkIcon /> : <SchoolIcon />}
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
    </div>
  );
}

export default Experience;
