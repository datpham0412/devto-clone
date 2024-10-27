import React from "react";
import CardComponent from "~/components/CardComponent";
import Image from 'next/image';

interface ListingItem {
  id: number;
  mainTitle: string;
  subText: string;
}

interface NewsItem {
  id: number;
  mainTitle: string;
  subText?: string;
  newarticle: boolean;
}

interface HelpItem {
  id: number;
  mainTitle: string;
  subText?: string;
  newarticle: boolean;
}

const listings: ListingItem[] = [
  // ... (your listings data)
];

const news: NewsItem[] = [
  // ... (your news data)
];

const help: HelpItem[] = [
  // ... (your help data)
];

const RightSidebar: React.FC = () => {
  return (
    <aside className="rightBar">
      <div className="rightBar__card-hackathon">
        <p>
          <Image src="https://picsum.photos/200/300" alt="" width={200} height={300} />
        </p>
        <h2>
          <a href="/#">"Hack the Planet" with New Relic & DEV</a>
        </h2>

        <p>
          Use New Relic to build a climate-change observability app for the
          chance to win up to $5,000!
          <strong>
            <a href="/#">&nbsp;join the hackathon</a>
          </strong>
        </p>
      </div>

      <CardComponent tag="Listings" articles={listings} />
      <CardComponent tag="#news" articles={news} />
      <CardComponent tag="#help" articles={help} />
    </aside>
  );
};

export default RightSidebar;
