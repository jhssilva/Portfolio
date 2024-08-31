import git from "../resources/img/git.jpeg";
import linkedin from "../resources/img/linkedin.png";
import resume from "../resources/img/resume.jpeg";
import PongGame from "../resources/img/PongGame.png";
import RestauranteChuva from "../resources/img/RestauranteChuva.jpeg";
import TicTacToe from "../resources/img/TicTacToe.png";
import Snake from "../resources/img/Snake.png";
import FlappyBird from "../resources/img/FlappyBird.png";
import Bomberman from "../resources/img/Bomberman.png";
import Resume from "../resources/main.pdf";

const descriptionAboutMe =
  "Software engineer with 5+ years in full-stack development, specializing in JavaScript and Python, with strong skills in teamwork, cross-functional communication, technical troubleshooting, and debugging.";

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
  { id: 1, title: "HTML" },
  { id: 2, title: "CSS" },
  {
    id: 3,
    title: "Javascript/Typescript",
  },
  { id: 4, title: "React" },
  { id: 5, title: "Java" },
  { id: 6, title: "C/C++" },
  { id: 7, title: "Swift" },
  { id: 8, title: "Node.js" },
  { id: 9, title: "MongoDB" },
  { id: 10, title: "SQL" },
  { id: 11, title: "Python" },
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
    url: Resume,
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
    description: [
      "Engaged with customers via multiple channels (ticketing system, live chat, and screen sharing tools) to identify and resolve technical support requests while continuing to educate our clients on the use of the platform",
      "Resolved 70% more tickets than the target, maintaining a 99% customer satisfaction rating, earning the Top Dog Award for Q2 2024",
    ],
  },
  {
    id: 2,
    duration: "Sept 2021 - Oct 2023",
    titleBegin: "Senior Technical Support Engineer",
    titleEnd: "Usercentrics",
    description: [
      "Supported customers by integrating software products on the customer platforms (e.g. Website, Applications), using Javascript, HTML/CSS, SWIFT, Kotlin, GraphQL, React Native, and Flutter",
      "Coached and trained more than 5 new team members, providing guidance and support",
      "Delegated, wrote and maintained documentation on the tech support team. (e.g. common problems, technical implementations, FAQ). Reduced the overall ticket numbers by more than 20%",
    ],
  },
  {
    id: 3,
    duration: "Feb 2020 - Aug 2021",
    titleBegin: "Junior Solutions Developer",
    titleEnd: "Truewind",
    description: [
      "Developed a mobile platform with 80,000+ monthly active users using JavaScript, HTML/CSS, SQL, C#, OutSystems, Firebase, and AWS S3 Buckets",
      "Collaborated with 4+ teams at large organizations to diagnose new features and current issues, and write and develop software requirements using the SCRUM methodology",
    ],
  },
  {
    id: 4,
    duration: "2019 - 2020",
    titleBegin: "Full Stack Developer",
    titleEnd: "Enso Origins",
    description: [
      "Successfully engineered 2 web platforms that increased the company’s productivity by more than 200%, using PHP, HTML/CSS, Javascript, PostgreSQL, Rest APIS, Git, Docker, Composer, and other frameworks",
      "Engineered software that enabled the enterprise to manage (e.g. create, read, update, delete (CRUD)) accounts in 10+ different software platforms (e.g. LDAP, Jira, Git), providing easy scalability (e.g. adding a service with only 2 entries on a JSON file) and instantly create/delete of accounts with just one click",
      "Developed and maintained system design documents. (e.g. proofs of concept, requirements specification) and collaborated with the CEO to scope milestones and delivery estimates on the project’s progress",
    ],
  },
];

export {
  listAboutItems,
  blogList,
  listSkills,
  listControls,
  descriptionAboutMe,
  listPortfolioItems,
  listTimelineItems,
};
