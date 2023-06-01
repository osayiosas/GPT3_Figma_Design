import React from "react";

import { Article } from "../../components";

import "./blog.css";

import { blog01, blog02, blog03, blog04, blog05 } from "./import";

function Blog() {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Alot is happening, we are blgging about it.
        </h1>
      </div>

      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imaUrl={blog01}
            date="june 01, 2023"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>

        <div className="gpt3__blog-container_groupB">
          <Article
            imaUrl={blog02}
            date="june 01, 2023"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imaUrl={blog03}
            date="june 01, 2023"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imaUrl={blog04}
            date="june 01, 2023"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imaUrl={blog05}
            date="june 01, 2023"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
