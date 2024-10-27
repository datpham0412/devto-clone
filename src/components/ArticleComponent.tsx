"use client";

import React from "react";
import { BiHeart } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from 'next/link';
import Image from 'next/image';

dayjs.extend(relativeTime);

interface ArticleProps {
  data: {
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
    <article className="article">
      {cover_image && (
        <Link
          href={url}
          className="article__image"
          style={{
            backgroundImage: `url(${cover_image})`,
          }}
        >
          &nbsp;
        </Link>
      )}
      <div className="article__details">
        <div className="u-pic">
          <Image src={user.profile_image_90} alt="" width={40} height={40} />
        </div>
        <div className="u-details">
          <Link href={`https://dev.to/${user.username}`}>
            <span className="u-name">{user.username}</span>
          </Link>
          <Link href={url}>
            <span className="time">
              {new Date(published_at).toLocaleDateString(undefined, {
                day: "numeric",
                month: "long",
              })}
              &nbsp; ({dayjs(published_at).fromNow()})
            </span>
          </Link>

          <Link href={url}>
            <h3>{title}</h3>
          </Link>

          <div className="tags">
            {tag_list.map((tag, id) => (
              <Link key={id} href={`https://dev.to/t/${tag}`}>
                <span className="tag">#{tag}</span>
              </Link>
            ))}
          </div>

          <div className="additional-details">
            <div className="reactions">
              {public_reactions_count + positive_reactions_count > 0 && (
                <Link href={url}>
                  <span>
                    <i>
                      <BiHeart />
                    </i>
                    &nbsp;
                    {public_reactions_count + positive_reactions_count} &nbsp;
                    <span className="hidden-mobile">reactions</span>
                  </span>
                </Link>
              )}

              <Link href={url}>
                <span>
                  <i>
                    <FaRegComment />
                  </i>
                  &nbsp;
                  {comments_count > 0 ? (
                    <span>
                      {comments_count} &nbsp;
                      <span className="hidden-mobile">comments</span>
                    </span>
                  ) : null}
                  {comments_count === 0 ? (
                    <span>
                      <span className="show-mobile">{comments_count}</span>
                      &nbsp;
                      <span className="hidden-mobile">Add comment</span>
                    </span>
                  ) : null}
                </span>
              </Link>
            </div>

            <div className="save">
              <small>1 min read</small>
              <button>save</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleComponent;
