import React from "react";
import MainTitle from "./MainTitle";

const Blogs = () => {
  const Blog = (props) => {
    const { img, header, description } = props;
    return (
      <div className="blog">
        {img}
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
        <Blog img={""} header={"dadadada"} description="dadada" />
      </div>
    </div>
  );
};

export default Blogs;
