import React, { useEffect, useState } from "react";
import NewsCard from "./newsCard";

const NewsAPI = ({ query }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    let apiKey = `b0cb16d0febf41f3ac58538eb997c02b`;
    let url = `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${apiKey}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, [query]);
  function keygen() {
    let uid = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      uid += characters.charAt(randomIndex);
    }

    return uid;
  }

  return (
    <div className="py-10 grid grid-cols-1 lg:gap-14 lg:grid-cols-2 2xl:grid-cols-3">
      {news.map((blog) => (
        <NewsCard key={keygen()} blog={blog} />
      ))}
    </div>
  );
};

export default NewsAPI;
