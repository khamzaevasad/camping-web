import './Blog.css';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';

import React from 'react';

const Blog = () => {
  return (
    <div className="main-blog">
      <h2 className="main-heading">Blogs</h2>

      <div className="blog-container">
        <div className="blog-left">
          <h3 className="blog-subtitle">🏕️ Explore Our Travel Stories</h3>
          <p className="blog-description">
            Every adventure starts with a spark. From cozy camper nights under
            the stars to breathtaking morning views — discover stories that
            inspire your next getaway.
          </p>
          <a href="#blog" className="read-more">
            → Read more on our travel blog
          </a>
        </div>
        <div className="blog-right">
          <div className="blog-photos">
            <img src={blog1} alt="blog-img" />
            <img src={blog2} alt="blog-img" />
            <img src={blog3} alt="blog-img" />
            <img src={blog1} alt="blog-img" />
            <img src={blog2} alt="blog-img" />
            <img src={blog3} alt="blog-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
