import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { Blog_01, Blog_02, Blog_03, Blog_04, Blog_05 } from "../../assets";
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={Blog_01}
            date="Jan 26, 2023"
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={Blog_02}
            date="March 12, 2023"
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl={Blog_03}
            date="Aug 16, 2023"
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl={Blog_04}
            date="Sept 22, 2023"
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl={Blog_05}
            date="Dec 19, 2023"
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
        </div>
      </div>
    </div>
  );
};
export default Blog;
