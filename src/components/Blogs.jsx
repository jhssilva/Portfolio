import React from "react";
import MainTitle from "./MainTitle";
import { blogList } from "../utils/Information";

const Blogs = () => {
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
      <MainTitle headerBegin="My" headerEnd="Blogs" />
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
