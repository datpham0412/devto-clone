"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FcHome,
  FcReading,
  FcTodoList,
  FcVideoCall,
  FcAbout,
  FcIdea,
  FcShop,
  FcLike,
  FcBriefcase,
  FcDisclaimer,
  FcBusinessContact,
} from "react-icons/fc";
import { AiFillAudio } from "react-icons/ai";
import { FaTags, FaDev } from "react-icons/fa";
import { IoLogoTwitter, IoLogoFacebook, IoLogoGithub } from "react-icons/io";
import { RiInstagramFill, RiTwitchLine } from "react-icons/ri";
import { CgShapeHexagon } from "react-icons/cg";
import { GrFormClose } from "react-icons/gr";
import type { IconType } from "react-icons";
import { BsBookmarkHeart } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BiPurchaseTag } from "react-icons/bi";
import { FiBox } from "react-icons/fi";
import { CgShoppingBag } from "react-icons/cg";
import { RiFileList3Line } from "react-icons/ri";

const tags = [
  "react",
  "graphql",
  "nodejs",
  "sass",
  "javascript",
  "html",
  "css",
  "webdev",
  "opensource",
  "beginners",
  "python",
  "git",
  "vscode",
  "npm",
  "sql",
  "ubuntu",
  "aws",
];

interface LeftSidebarProps {
  burgerMenu: boolean;
  closeMenu: () => void;
}

interface SocialLink {
  Icon: IconType;
  url: string;
}

const socialLinks: SocialLink[] = [
  { Icon: IoLogoTwitter, url: "/twitter" },
  { Icon: IoLogoFacebook, url: "/facebook" },
  { Icon: IoLogoGithub, url: "/github" },
  { Icon: RiInstagramFill, url: "/instagram" },
  { Icon: RiTwitchLine, url: "/twitch" },
];

const LeftSidebar: React.FC<LeftSidebarProps> = ({ burgerMenu, closeMenu }) => {
  const [more, setMore] = useState(false);
  const toggle = () => setMore(!more);

  const MenuLinks = () => (
    <>
      <ul className="space-y-1">
        <li>
          <Link
            href="/home"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700 font-medium"
          >
            <i className="pr-2 text-[1.15rem]">
              <FcHome />
            </i>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/devplus"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700 font-medium"
          >
            <i className="pr-2 text-[1.15rem] text-indigo-600">
              <FiBox />
            </i>
            DEV++
          </Link>
        </li>
        <li>
          <Link
            href="/reading"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700 font-medium"
          >
            <i className="pr-2 text-[1.15rem]">
              <BsBookmarkHeart />
            </i>
            Reading List
          </Link>
        </li>
        <li>
          <Link
            href="/podcast"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700 font-medium"
          >
            <i className="pr-2 text-[1.15rem]">
              <AiFillAudio />
            </i>
            Podcasts
          </Link>
        </li>
        <li>
          <Link
            href="/videos"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700 font-medium"
          >
            <i className="pr-2 text-[1.15rem]">
              <FcVideoCall />
            </i>
            Videos
          </Link>
        </li>
        <li>
          <Link
            href="/tags"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700 font-medium"
          >
            <i className="pr-2 text-[1.15rem]">
              <BiPurchaseTag />
            </i>
            Tags
          </Link>
        </li>
        <li>
          <Link
            href="/help"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700 font-medium"
          >
            <i className="pr-2 text-[1.15rem]">
              <HiOutlineLightBulb />
            </i>
            DEV Help
          </Link>
        </li>
        <li>
          <Link
            href="/shop"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700 font-medium"
          >
            <i className="pr-2 text-[1.15rem]">
              <CgShoppingBag />
            </i>
            Forem Shop
          </Link>
        </li>
      </ul>

      <div className={more ? "block" : "hidden"}>
        <div className="my-2 border-t border-gray-100" />
        <ul className="space-y-1">
          <li>
            <Link
              href="/advertise"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700 font-medium"
            >
              <i className="pr-2 text-[1.15rem]">
                <FcLike />
              </i>
              Advertise on DEV
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700 font-medium"
            >
              <i className="pr-2 text-[1.15rem]">
                <FaDev />
              </i>
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700 font-medium"
            >
              <i className="pr-2 text-[1.15rem]">
                <FcBusinessContact />
              </i>
              Contact
            </Link>
          </li>
        </ul>

        <div className="my-2 border-t border-gray-100" />
        <h3 className="px-4 py-2 text-xs font-bold uppercase text-gray-700">
          Other
        </h3>
        <ul className="space-y-1">
          <li>
            <Link
              href="/code"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700 font-medium"
            >
              <i className="pr-2 text-[1.15rem]">
                <RiFileList3Line />
              </i>
              Code of Conduct
            </Link>
          </li>
          <li>
            <Link
              href="/privacy"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700 font-medium"
            >
              <i className="pr-2 text-[1.15rem]">
                <FcBriefcase />
              </i>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/terms"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700 font-medium"
            >
              <i className="pr-2 text-[1.15rem]">
                <FcDisclaimer />
              </i>
              Terms of use
            </Link>
          </li>
        </ul>
      </div>

      <button
        onClick={toggle}
        className="mt-1 px-4 py-2 text-sm text-gray-700 hover:text-blue-700 font-medium"
      >
        {more ? "Less..." : "More..."}
      </button>
    </>
  );

  return (
    <>
      <aside>
        <nav>
          <MenuLinks />
        </nav>

        <div className={`mt-4 flex p-4 ${more ? "block" : "hidden"}`}>
          {socialLinks.map(({ Icon, url }, index) => (
            <Link
              key={index}
              href={url}
              className="mx-2 text-2xl text-gray-600 hover:text-gray-900"
            >
              <Icon />
            </Link>
          ))}
        </div>

        <nav>
          <header className="flex items-center justify-between p-2">
            <h3 className="text-base font-bold">My Tags</h3>
            <i className="cursor-pointer rounded-lg p-2 text-2xl text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <CgShapeHexagon />
            </i>
          </header>
          <ul className="mr-3 h-[40vh] overflow-y-auto leading-relaxed">
            {tags.map((tag, id) => (
              <li
                key={id}
                className="cursor-pointer rounded-lg p-2 hover:bg-gray-100 hover:text-blue-800 font-medium"
              >
                <Link href={`/#${tag}`}>#{tag}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {burgerMenu && (
        <div className="fixed inset-0 z-50">
          <div className="relative h-full w-[90%] max-w-[300px] overflow-y-auto bg-white">
            <header className="flex items-center border-b border-gray-200 p-4">
              <h2 className="flex-1 text-lg">DEV Community</h2>
              <button
                onClick={closeMenu}
                className="rounded-full text-2xl hover:bg-gray-100 hover:shadow-[0_0_0_5px_rgba(0,0,0,0.05)]"
              >
                <GrFormClose />
              </button>
            </header>

            <div className="p-2">
              <nav>
                <MenuLinks />
              </nav>
            </div>
          </div>

          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}
    </>
  );
};

export default LeftSidebar;
