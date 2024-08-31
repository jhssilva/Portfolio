import React from "react";
import { listTimelineItems } from "../utils/Information";

const Timeline = () => {
  const TimelineItem = (props) => {
    const { duration, titleBegin, titleEnd, description } = props;

    return (
      <div className="timeline-item">
        <div className="tl-icon">
          <i className="fas fa-briefcase"></i>
        </div>
        <p className="tl-duration">{duration}</p>
        <h5>
          {titleBegin} <span> - {titleEnd}</span>
        </h5>
        <ul>
          {description.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    );
  };

  return (
    <div className="timeline">
      {listTimelineItems.map((item) => {
        const { id, duration, titleBegin, titleEnd, description } = item;
        return (
          <TimelineItem
            key={id}
            duration={duration}
            titleBegin={titleBegin}
            titleEnd={titleEnd}
            description={description}
          />
        );
      })}
    </div>
  );
};

export default Timeline;
