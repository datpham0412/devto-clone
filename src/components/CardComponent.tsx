import React from "react";
import Link from "next/link";

interface Article {
  id: number;
  mainTitle: string;
  subText?: string;
  newarticle?: boolean;
}

interface CardComponentProps {
  tag: string;
  articles: Article[];
}

const CardComponent: React.FC<CardComponentProps> = ({ tag, articles }) => {
  return (
    <div className="my-4 h-max rounded-lg bg-gray-50 leading-relaxed">
      <header className="flex items-center px-4 py-2">
        <h3 className="flex-1 text-xl">{tag}</h3>
        {tag === "Listings" && (
          <Link href="/#">
            <small className="text-sm text-blue-600">see all</small>
          </Link>
        )}
      </header>
      <ul>
        {articles.map((a) => (
          <li
            key={a.id}
            className="block cursor-pointer border-y border-gray-100 px-4 py-4 transition-all duration-200 hover:bg-white hover:text-blue-800"
          >
            <Link href="/#">{a.mainTitle}</Link> <br />
            <small className="text-gray-600">{a.subText}</small>
            {a.newarticle && (
              <span className="mt-1 rounded bg-blue-600 px-1 py-1 text-xs text-white">
                new
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardComponent;
