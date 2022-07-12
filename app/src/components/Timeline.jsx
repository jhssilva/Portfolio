import React from "react";

const Timeline = () => {
  const listTimelineItems = [
    {
      id: 1,
      duration: "Sept 2021 - Current",
      titleBegin: "Customer Success Engineer",
      titleEnd: "Usercentrics",
      description:
        "Supports the customers by integrating software products like the Consent Management Platform (CMP) on the customer platform (e.g. Website, Applications).",
    },
    {
      id: 2,
      duration: "Feb 2020 - Aug 2021",
      titleBegin: "Junior Solutions Developer",
      titleEnd: "Truewind",
      description:
        "Collaborate with other teams analyzing requirements, and developing software for day-to-day platforms (e.g. Website and Mobile) using SCRUM methodology.",
    },
    {
      id: 3,
      duration: "2019 - 2020",
      titleBegin: "Full Stack Developer",
      titleEnd: "Enso Origins",
      description: "Develop, test, and implement new software programs.",
    },
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
