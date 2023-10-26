import React, { useState, useEffect } from "react";

const NewsCard = ({ blog }) => {
  const [truncatedTitle, setTruncatedTitle] = useState(blog.title);
  useEffect(() => {
    if (blog.title.length >= 55) {
      setTruncatedTitle(blog.title.slice(0, 55) + "...");
    }
  }, [truncatedTitle]);
  return (
    <div className="max-w-lg rounded-lg overflow-hidden shadow-lg my-5 outline-none bg-slate-100 text-black">
      <img
        className="w-full aspect-[2/1]"
        src={blog.urlToImage}
        alt={truncatedTitle}
      />
      <div className="p-6">
        <div className="font-bold text-2xl mb-2">{truncatedTitle}</div>
        <div className="description">{blog.description}</div>
      </div>
    </div>
  );
};

export default NewsCard;
