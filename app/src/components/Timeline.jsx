import React from "react";

const Timeline = () => {
  const listTimelineItems = [
    {
      id: 1,
      duration: "2019 - 2020",
      titleBegin: "Junior Software Developer",
      titleEnd: "Enso Origins",
      description: "Dadadad ad ada a a a a a",
    },
    { id: 2, duration: "", titleBegin: "", titleEnd: "", description: "" },
    { id: 3, duration: "", titleBegin: "", titleEnd: "", description: "" },
    { id: 4, duration: "", titleBegin: "", titleEnd: "", description: "" },
  ];

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
        <p>{description}</p>
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
