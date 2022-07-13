import React from "react";
import MainTitle from "./MainTitle";
import git from "../resources/img/git.jpeg";
import linkedin from "../resources/img/linkedin.png";
import resume from "../resources/img/resume.jpeg";

const Blogs = () => {
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
      description: "Profissional Profile",
      img: linkedin,
      url: "https://www.linkedin.com/in/jhssilvaa/",
    },
    {
      id: 3,
      header: "Resume",
      description: "Hugo Silva",
      img: resume,
      url: "https://docs.google.com/document/d/13LLI6V8zva_zG7_KWLYqLB3d-W6YoySCr9GONgwShBM/edit?usp=sharing",
    },
  ];

  const Blog = (props) => {
    const { img, header, description, url } = props;
    return (
      <div className="blog">
        <a href={url} target="_blank" rel="noreferrer">
          {" "}
          <img src={img} alt="header" />
        </a>

        <div className="blog-text">
          <h4>{header}</h4>
          <p>{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <MainTitle headerBegin="My" headerEnd="Blogs" text="My Blogs" />
      <div className="blogs">
        {blogList.map((blog) => {
          const { id, img, header, description, url } = blog;
          return (
            <Blog
              key={id}
              img={img}
              header={header}
              description={description}
              url={url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
