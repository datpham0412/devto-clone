"use client";
import React, { useMemo } from "react";
import { BiHeart } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import Image from "next/image";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

dayjs.extend(relativeTime);

interface ArticleProps {
  data: {
    title: string;
    cover_image: string | null;
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
  };
}

const REACTION_ICONS = [
  {
    src: "https://assets.dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg",
    alt: "unicorn",
  },
  {
    src: "https://assets.dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg",
    alt: "heart",
  },
  {
    src: "https://assets.dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg",
    alt: "fire",
  },
  {
    src: "https://assets.dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg",
    alt: "raised hands",
  },
  {
    src: "https://assets.dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg",
    alt: "mind blown",
  },
];

const ArticleComponent: React.FC<ArticleProps> = ({ data }) => {
  const {
    title,
    cover_image,
    tag_list,
    url,
    comments_count,
    positive_reactions_count,
    public_reactions_count,
    user,
    published_at,
  } = data;

  const reactionIcons = useMemo(() => {
    const totalReactions = public_reactions_count + positive_reactions_count;
    // More icons for posts with more reactions
    const numIcons = totalReactions > 10 ? 
      Math.min(5, Math.floor(Math.random() * 2) + 4) : // 4-5 icons for popular posts
      Math.min(3, Math.floor(Math.random() * 2) + 1);  // 1-2 icons for less popular posts
    
    const shuffled = [...REACTION_ICONS].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numIcons);
  }, [public_reactions_count, positive_reactions_count]);

  return (
    <article className="mb-4 mt-2 rounded-lg bg-white shadow">
      {cover_image && (
        <Link
          href={url}
          className="block hidden h-auto w-full rounded-t-lg bg-cover bg-center pb-[40%] first:block"
          style={{
            backgroundImage: `url(${cover_image})`,
          }}
        >
          &nbsp;
        </Link>
      )}
      <div className="relative flex p-4">
        <div className="block w-8">
          <Image
            src={user.profile_image_90}
            alt=""
            width={40}
            height={40}
            className="w-full rounded-full"
          />
        </div>
        <div className="mb-2 flex flex-col pl-2">
          <Link href={`https://dev.to/${user.username}`}>
            <span className="text-sm text-gray-600 hover:text-gray-800">
              {user.username}
            </span>
          </Link>
          <Link href={url}>
            <span className="text-sm text-gray-600 hover:text-gray-800">
              {new Date(published_at).toLocaleDateString(undefined, {
                day: "numeric",
                month: "long",
              })}
              &nbsp; ({dayjs(published_at).fromNow()})
            </span>
          </Link>

          <Link href={url}>
            <h3 className="mt-4 text-2xl hover:text-blue-600">{title}</h3>
          </Link>

          <div className="mt-4 flex flex-wrap">
            {tag_list.map((tag, id) => (
              <Link key={id} href={`https://dev.to/t/${tag}`}>
                <span className="p-1 text-sm text-gray-600 hover:text-gray-900">
                  #{tag}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link
                href={url}
                className="flex items-center rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                <div className="flex items-center">
                  <span className="multiple-reactions-container">
                    {reactionIcons.map((icon, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                        style={{
                          zIndex: reactionIcons.length - index,
                          width: '26px',
                          height: '26px',
                          padding: '4px',
                          marginLeft: '-8px',
                        }}
                      >
                        <img
                          src={icon.src}
                          width="18"
                          height="18"
                          alt={icon.alt}
                          className="inline-block"
                        />
                      </span>
                    ))}
                  </span>
                  <span className="ml-2 text-sm">
                    {public_reactions_count + positive_reactions_count}
                    <span className="hidden md:inline">&nbsp;reactions</span>
                  </span>
                </div>
              </Link>

              <Link
                href={`${url}#comments`}
                className="flex items-center rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="mr-1"
                >
                  <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z" />
                </svg>
                <span className="text-sm">
                  {comments_count > 0 ? (
                    <>
                      {comments_count}
                      <span className="hidden md:inline">&nbsp;comments</span>
                    </>
                  ) : (
                    <span className="hidden md:inline">Add comment</span>
                  )}
                </span>
              </Link>
            </div>

            <div className="absolute right-0 mr-4 flex items-center gap-2">
              <small className="text-sm text-gray-600">1 min read</small>
              <button 
                className="flex items-center rounded-lg p-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                aria-label="Save article"
              >
                <BsBookmark className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleComponent;
