"use client";

import React, { useEffect } from "react";
import ArticleComponent from "~/components/ArticleComponent";
import ArticleSkeleton from "~/components/ArticleSkeleton";
import { trpc } from "~/utils/trpc";
import type { Article } from "~/server/api/routers/articles";

const Content: React.FC = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    trpc.articles.infiniteArticles.useInfiniteQuery(
      {
        limit: 10,
      },
      {
        getNextPageParam: (lastPage: any) => lastPage.nextCursor,
      },
    );

  useEffect(() => {
    const handleScroll = () => {
      if (isFetchingNextPage || !hasNextPage) return;

      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight - 300) {
        void fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFetchingNextPage, hasNextPage, fetchNextPage]);

  return (
    <main>
      <header className="flex items-center py-2">
        <h1 className="flex-1 text-xl">Posts</h1>
        <nav className="hidden md:block">
          <a
            href="/#"
            className="relative mx-2 rounded-lg px-2 py-2 font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:mx-2 after:h-[3px] after:rounded-lg after:bg-blue-600 after:transition-all after:duration-200 hover:bg-blue-600/10 hover:text-[#2F3AB2] hover:after:mx-0 hover:after:rounded-none"
          >
            Feed
          </a>
          <a
            href="/#"
            className="mx-2 rounded-lg px-2 py-2 hover:bg-blue-600/10 hover:text-[#2F3AB2]"
          >
            Week
          </a>
          <a
            href="/#"
            className="mx-2 rounded-lg px-2 py-2 hover:bg-blue-600/10 hover:text-[#2F3AB2]"
          >
            Month
          </a>
          <a
            href="/#"
            className="mx-2 rounded-lg px-2 py-2 hover:bg-blue-600/10 hover:text-[#2F3AB2]"
          >
            Infinity
          </a>
          <a
            href="/#"
            className="mx-2 rounded-lg px-2 py-2 hover:bg-blue-600/10 hover:text-[#2F3AB2]"
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
        {isLoading ? (
          [1, 2, 3, 4, 5].map((a) => <ArticleSkeleton key={a} />)
        ) : (
          <>
            {data?.pages.map((page: any, i: number) => (
              <React.Fragment key={i}>
                {page.items.map((article: Article) => (
                  <ArticleComponent key={article.id} data={article} />
                ))}
              </React.Fragment>
            ))}
            {isFetchingNextPage && (
              <div className="flex justify-center py-4">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default Content;
