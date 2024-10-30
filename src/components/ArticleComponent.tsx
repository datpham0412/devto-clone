"use client";
import React from "react";
import { BiHeart } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import Image from "next/image";

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

          <div className="mt-4 flex items-center">
            <div className="flex-1">
              {public_reactions_count + positive_reactions_count > 0 && (
                <Link
                  href={url}
                  className="-ml-4 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  <span>
                    <i>
                      <BiHeart />
                    </i>
                    &nbsp;
                    {public_reactions_count + positive_reactions_count} &nbsp;
                    <span className="hidden md:inline">reactions</span>
                  </span>
                </Link>
              )}

              <Link
                href={url}
                className="rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                <span>
                  <i>
                    <FaRegComment />
                  </i>
                  &nbsp;
                  {comments_count > 0 ? (
                    <span>
                      {comments_count} &nbsp;
                      <span className="hidden md:inline">comments</span>
                    </span>
                  ) : null}
                  {comments_count === 0 ? (
                    <span>
                      <span className="md:hidden">{comments_count}</span>
                      &nbsp;
                      <span className="hidden md:inline">Add comment</span>
                    </span>
                  ) : null}
                </span>
              </Link>
            </div>

            <div className="absolute right-0 ml-4 pr-4">
              <small className="mr-2 text-gray-600">1 min read</small>
              <button className="rounded-lg bg-gray-100 px-3 py-1 text-gray-600 transition-all duration-200 hover:bg-gray-200 hover:text-gray-800">
                save
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleComponent;
