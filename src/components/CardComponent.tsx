import React from "react";
import Link from 'next/link';

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
    <div className="card">
      <header>
        <h3>{tag}</h3>
        {tag === "Listings" && (
          <Link href="/#">
            <small>see all</small>
          </Link>
        )}
      </header>
      <ul>
        {articles.map((a) => (
          <li key={a.id}>
            <Link href="/#">{a.mainTitle}</Link> <br />
            <small>{a.subText}</small>
            {a.newarticle && <span>new</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardComponent;
