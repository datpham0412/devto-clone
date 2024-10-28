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
    <main>
      <header className="flex items-center py-2">
        <h1 className="flex-1 text-xl">Posts</h1>
        <nav className="hidden md:block">
          <a
            href="/#"
            className="relative mx-2 rounded-lg px-2 py-2 font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:mx-2 after:h-[3px] after:rounded-lg after:bg-blue-600 after:transition-all after:duration-200 hover:bg-blue-600/10 hover:text-blue-600 hover:after:mx-0 hover:after:rounded-none"
          >
            Feed
          </a>
          <a
            href="/#"
            className="mx-2 rounded-lg px-2 py-2 hover:bg-blue-600/10 hover:text-blue-600"
          >
            Week
          </a>
          <a
            href="/#"
            className="mx-2 rounded-lg px-2 py-2 hover:bg-blue-600/10 hover:text-blue-600"
          >
            Month
          </a>
          <a
            href="/#"
            className="mx-2 rounded-lg px-2 py-2 hover:bg-blue-600/10 hover:text-blue-600"
          >
            Infinity
          </a>
          <a
            href="/#"
            className="mx-2 rounded-lg px-2 py-2 hover:bg-blue-600/10 hover:text-blue-600"
          >
            Latest
          </a>
        </nav>
        <select
          id="dropdown-select"
          className="rounded-lg border border-gray-300 bg-gray-50 p-2 text-base outline-none focus:shadow-[0_0_1px_1px_rgba(59,73,223,1)] md:hidden"
          defaultValue="Feed"
        >
          <option value="Feed">Feed</option>
          <option value="Week">Week</option>
          <option value="Month">Month</option>
          <option value="Year">Year</option>
          <option value="Infinity">Infinity</option>
        </select>
      </header>
      <div>
        {articles?.map((article) => (
          <ArticleComponent key={article.id} data={article} />
        )) ?? [1, 2, 3, 4, 5].map((a) => <ArticleSkeleton key={a} />)}
      </div>
    </main>
  );
};

export default Content;
