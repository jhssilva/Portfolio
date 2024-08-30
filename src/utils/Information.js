import git from "../resources/img/git.jpeg";
import linkedin from "../resources/img/linkedin.png";
import resume from "../resources/img/resume.jpeg";
import PongGame from "../resources/img/PongGame.png";
import RestauranteChuva from "../resources/img/RestauranteChuva.jpeg";
import TicTacToe from "../resources/img/TicTacToe.png";
import Snake from "../resources/img/Snake.png";
import FlappyBird from "../resources/img/FlappyBird.png";
import Bomberman from "../resources/img/Bomberman.png";

const resumeAddress = "./resources/main.pdf";

const descriptionAboutMe =
  "A software engineer with 5+ years of experience in full-stack development, teamwork, cross-functional communication, technical troubleshooting, and debugging.";

const listAboutItems = [
  {
    id: 1,
    title: "5+ years",
    descriptionBegin: "Developing",
    descriptionEnd: "Software",
  },
  {
    id: 3,
    title: "10+",
    descriptionBegin: "Projects",
    descriptionEnd: "",
  },
  {
    id: 2,
    title: "Bachelor",
    descriptionBegin: "Software",
    descriptionEnd: "Engineer",
  },
  {
    id: 4,
    title: "Master",
    descriptionBegin: "Software",
    descriptionEnd: "Engineer",
  },
];

const listSkills = [
  { id: 1, title: "HTML", description: "95%", classValue: "html" },
  { id: 2, title: "CSS", description: "90%", classValue: "css" },
  {
    id: 3,
    title: "Javascript/Typescript",
    description: "85%",
    classValue: "javascript",
  },
  { id: 4, title: "React", description: "60%", classValue: "react" },
  { id: 5, title: "Java", description: "80%", classValue: "java" },
  { id: 6, title: "C/C++", description: "85%", classValue: "c" },
  { id: 7, title: "Swift", description: "80%", classValue: "swift" },
  { id: 8, title: "Node.js", description: "70%", classValue: "node" },
  { id: 9, title: "MongoDB", description: "55%", classValue: "mongodb" },
  { id: 10, title: "SQL", description: "80%", classValue: "sql" },
];

const blogList = [
  {
    id: 1,
    header: "GitHub",
    description: "Projects Repository",
    img: git,
    url: "https://github.com/jhssilva",
  },
  {
    id: 2,
    header: "Linkedin",
    description: "Professional Profile",
    img: linkedin,
    url: "https://www.linkedin.com/in/jhssilvaa/",
  },
  {
    id: 3,
    header: "Resume",
    description: "Hugo Silva Resume",
    img: resume,
    url: resumeAddress,
  },
];

const listControls = [
  { id: 1, dataId: "home", icon: "fas fa-home" },
  { id: 2, dataId: "about", icon: "fas fa-user" },
  { id: 3, dataId: "portfolio", icon: "fas fa-briefcase" },
  { id: 4, dataId: "blogs", icon: "fas fa-newspaper" },
  { id: 5, dataId: "contact", icon: "fas fa-envelope-open" },
];

const listPortfolioItems = [
  {
    id: 1,
    title: "Pong Game",
    endpoint: "https://github.com/jhssilva/PongGame",
    img: <PongGame />,
  },
  {
    id: 2,
    title: "Restaurante Chuva",
    endpoint: "https://github.com/jhssilva/RestauranteChuva",
    img: <RestauranteChuva />,
  },
  {
    id: 3,
    title: "Tic Tac Toe",
    endpoint: "https://github.com/jhssilva/Tic-Tac-Toe",
    img: <TicTacToe />,
  },
  {
    id: 4,
    title: "Snake Simulator",
    endpoint: "https://github.com/jhssilva/SnakeSimulation",
    img: <Snake />,
  },
  {
    id: 5,
    title: "Flappy Bird",
    endpoint: "https://github.com/jhssilva/Flappy-Bird",
    img: <FlappyBird />,
  },
  {
    id: 6,
    title: "Bomberman",
    endpoint: "https://github.com/jhssilva/Bomberman",
    img: <Bomberman />,
  },
];

const listTimelineItems = [
  {
    id: 1,
    duration: "Nov 2023 - Present",
    titleBegin: "Technical Support 2",
    titleEnd: "Datadog",
    description:
      "Engage with customers via multiple channels (ticketing system, live chat, and screensharing tools) to identify and resolve technical support requests while continuing to educate our clients on the use of the platform.",
  },
  {
    id: 2,
    duration: "Sept 2021 - Oct 2023",
    titleBegin: "Senior Technical Support Engineer",
    titleEnd: "Usercentrics",
    description:
      "Supports the customers by integrating software products like the Consent Management Platform (CMP) on the customer platform (e.g. Website, Applications).",
  },
  {
    id: 3,
    duration: "Feb 2020 - Aug 2021",
    titleBegin: "Junior Solutions Developer",
    titleEnd: "Truewind",
    description:
      "Collaborate with other teams analyzing requirements, and developing software for day-to-day platforms (e.g. Website and Mobile) using SCRUM methodology.",
  },
  {
    id: 4,
    duration: "2019 - 2020",
    titleBegin: "Full Stack Developer",
    titleEnd: "Enso Origins",
    description: "Develop, test, and implement new software programs.",
  },
];

export {
  listAboutItems,
  blogList,
  listSkills,
  listControls,
  resumeAddress,
  descriptionAboutMe,
  listPortfolioItems,
  listTimelineItems,
};
