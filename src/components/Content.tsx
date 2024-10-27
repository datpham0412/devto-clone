"use client";

import React, { useEffect, useState } from "react";
import ArticleComponent from "~/components/ArticleComponent";
import ArticleSkeleton from "~/components/ArticleSkeleton";

interface Article {
  id: number;
  title: string;
  cover_image: string;
  tag_list: string[];
  url: string;
  comments_count: number;
  positive_reactions_count: number;
  public_reactions_count: number;
  user: {
    username: string;
    profile_image_90: string;
  };
  published_at: string;
}

const Content: React.FC = () => {
  const [articles, setArticles] = useState<Article[] | null>(null);

  useEffect(() => {
    const fetchAgain = async () => {
      if (articles != null) {
        try {
          const res = await fetch("https://dev.to/api/articles");
          const result = (await res.json()) as Article[];
          setArticles([...articles, ...result]);
        } catch (error) {
          console.error("Error fetching articles:", error);
        }
      }
    };

    const handleScroll = () => {
      const html = document.documentElement;
      const body = document.body;
      const windowheight =
        "innerHeight" in window ? window.innerHeight : html.offsetHeight;

      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight,
      );

      const windowBottom = windowheight + window.pageYOffset;
      if (windowBottom >= docHeight) {
        console.log("we reached the bottom");
        void fetchAgain();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [articles]);

  useEffect(() => {
    const fetchInitialArticles = async () => {
      try {
        const res = await fetch("https://dev.to/api/articles");
        const data = (await res.json()) as Article[];
        setArticles(data);
      } catch (error) {
        console.error("Error fetching initial articles:", error);
      }
    };

    void setTimeout(() => {
      void fetchInitialArticles();
    }, 2000);
  }, []);

  return (
    <main className="main-content">
      <header>
        <h1>Posts</h1>
        <nav>
          <a href="/#">Feed</a>
          <a href="/#">Week</a>
          <a href="/#">Month</a>
          <a href="/#">Infinity</a>
          <a href="/#">Latest</a>
        </nav>
        <select id="dropdown-select" className="dropdown" defaultValue="Feed">
          <option value="Feed">Feed</option>
          <option value="Week">Week</option>
          <option value="Month">Month</option>
          <option value="Year">Year</option>
          <option value="Infinity">Infinity</option>
        </select>
      </header>
      <div className="articles">
        {articles?.map((article) => (
          <ArticleComponent key={article.id} data={article} />
        )) ?? [1, 2, 3, 4, 5].map((a) => <ArticleSkeleton key={a} />)}
      </div>
    </main>
  );
};

export default Content;
