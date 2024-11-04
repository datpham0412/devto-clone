import React from "react";
import CardComponent from "~/components/CardComponent";
import Image from "next/image";
import Link from "next/link";
import WhatsHappening from "./WhatsHappening";
import Discussions from "./Discussions";

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
  {
    id: 1,
    mainTitle: "Go/JS/PHP Software engineer looking for new opportunities",
    subText: "forHire",
  },
  {
    id: 2,
    mainTitle: "Live-Coding on YouTube continues tomorrow",
    subText: "events",
  },
  {
    id: 3,
    mainTitle: "Product Designer",
    subText: "jobs",
  },
  {
    id: 4,
    mainTitle: "FREE COURSE, this weekend only: Ship better code faster",
    subText: "education",
  },
  {
    id: 5,
    mainTitle: "MEAN / MERN Stack 100+ Learning Resources {FREE}",
    subText: "misc",
  },
];

const news: NewsItem[] = [
  {
    id: 1,
    mainTitle: "Game Dev Digest — Issue #83 - How and Why",
    newarticle: true,
  },
  {
    id: 2,
    mainTitle: "JavaScript News and Updates of February 2021",
    newarticle: true,
  },
  {
    id: 3,
    mainTitle: "🗞 What's new and special in Create Go App CLI v1.7.0?",
    newarticle: true,
  },
  {
    id: 4,
    mainTitle:
      "Google's Termination of Dr. Mitchell, Clubhouse Security, Low-Code Tools, & more on DevNews!",
    subText: "1 comment",
    newarticle: false,
  },
  {
    id: 5,
    mainTitle: "Ember 3.25 Released",
    newarticle: true,
  },
];

const help: HelpItem[] = [
  {
    id: 1,
    mainTitle: "How to start a programming blog?",
    newarticle: true,
  },
  {
    id: 2,
    mainTitle: "How to use @yarnpkg/core?",
    subText: "2 comments",
    newarticle: false,
  },
  {
    id: 3,
    mainTitle: "Need advice regarding web development",
    subText: "5 comments",
    newarticle: false,
  },
];

const RightSidebar: React.FC = () => {
  return (
    <aside className="flex flex-col">
      <WhatsHappening />
      <Discussions />
      <div className="h-max rounded-lg bg-gray-50 p-4 leading-relaxed">
        <p className="mb-4">
          <Image
            src="https://picsum.photos/200/300"
            alt=""
            width={200}
            height={100}
            className="inline-block h-auto max-h-[100px] w-full rounded-lg"
          />
        </p>
        <h2>
          <Link href="/#" className="text-blue-600 hover:text-blue-800">
            &quot;Hack the Planet&quot; with New Relic &amp; DEV
          </Link>
        </h2>

        <p>
          Use New Relic to build a climate-change observability app for the
          chance to win up to $5,000!
          <strong>
            <Link href="/#" className="text-blue-600 hover:text-blue-800">
              &nbsp;join the hackathon
            </Link>
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
