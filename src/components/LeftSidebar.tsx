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
import { HomeIcon } from "~/components/icons/HomeIcon";
import { sidebarLinkStyles } from "~/styles/sidebar";
import { useSession } from "next-auth/react";

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
  const { data: session } = useSession();
  const toggle = () => setMore(!more);

  const LoginCard = () => (
    <div className="mb-4 rounded-lg border border-gray-200 bg-white p-6">
      <h2 className="mb-6 text-2xl font-bold leading-tight">
        DEV Community is a community of 2,290,348 amazing developers
      </h2>
      <p className="mb-6 text-lg text-gray-600">
        We're a place where coders share, stay up-to-date and grow their
        careers.
      </p>
      <div className="flex flex-col gap-3">
        <Link
          href="/auth/signup"
          className="c-cta c-cta--branded mr-2 flex w-full items-center justify-center whitespace-nowrap rounded-lg border border-[#3B49DF] px-3 py-1.5 text-lg text-[#3B49DF] hover:bg-[#3B49DF] hover:text-white"
          data-tracking-id="ca_left_sidebar_home_page"
          data-tracking-source="left_sidebar"
        >
          Create account
        </Link>
        <Link
          href="/auth/signin"
          className="flex w-full items-center justify-center rounded-lg px-3 py-1.5 text-lg text-gray-600 hover:bg-gray-50 hover:text-gray-700"
        >
          Log in
        </Link>
      </div>
    </div>
  );

  const MenuLinks = () => (
    <>
      <ul className="space-y-1">
        <li>
          <Link href="/home" className={sidebarLinkStyles.default}>
            <i className={sidebarLinkStyles.icon}>
              <HomeIcon />
            </i>
            Home
          </Link>
        </li>
        <li>
          <Link href="/devplus" className={sidebarLinkStyles.default}>
            <i className={`${sidebarLinkStyles.icon} text-indigo-600`}>
              <FiBox />
            </i>
            DEV++
          </Link>
        </li>
        <li>
          <Link href="/reading" className={sidebarLinkStyles.default}>
            <i className={sidebarLinkStyles.icon}>
              <BsBookmarkHeart />
            </i>
            Reading List
          </Link>
        </li>
        <li>
          <Link href="/podcast" className={sidebarLinkStyles.default}>
            <i className={sidebarLinkStyles.icon}>
              <AiFillAudio />
            </i>
            Podcasts
          </Link>
        </li>
        <li>
          <Link href="/videos" className={sidebarLinkStyles.default}>
            <i className={sidebarLinkStyles.icon}>
              <FcVideoCall />
            </i>
            Videos
          </Link>
        </li>
        <li>
          <Link href="/tags" className={sidebarLinkStyles.default}>
            <i className={sidebarLinkStyles.icon}>
              <BiPurchaseTag />
            </i>
            Tags
          </Link>
        </li>
        <li>
          <Link href="/help" className={sidebarLinkStyles.default}>
            <i className={sidebarLinkStyles.icon}>
              <HiOutlineLightBulb />
            </i>
            DEV Help
          </Link>
        </li>
        <li>
          <Link href="/shop" className={sidebarLinkStyles.default}>
            <i className={sidebarLinkStyles.icon}>
              <CgShoppingBag />
            </i>
            Forem Shop
          </Link>
        </li>
      </ul>

      <div className={more ? "block" : "hidden"}>
        <div className={sidebarLinkStyles.divider} />
        <ul className="space-y-1">
          <li>
            <Link href="/advertise" className={sidebarLinkStyles.default}>
              <i className={sidebarLinkStyles.icon}>
                <FcLike />
              </i>
              Advertise on DEV
            </Link>
          </li>
          <li>
            <Link href="/about" className={sidebarLinkStyles.default}>
              <i className={sidebarLinkStyles.icon}>
                <FaDev />
              </i>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className={sidebarLinkStyles.default}>
              <i className={sidebarLinkStyles.icon}>
                <FcBusinessContact />
              </i>
              Contact
            </Link>
          </li>
        </ul>

        <div className={sidebarLinkStyles.divider} />
        <h3 className={sidebarLinkStyles.sectionHeader}>Other</h3>
        <ul className="space-y-1">
          <li>
            <Link href="/code" className={sidebarLinkStyles.default}>
              <i className={sidebarLinkStyles.icon}>
                <RiFileList3Line />
              </i>
              Code of Conduct
            </Link>
          </li>
          <li>
            <Link href="/privacy" className={sidebarLinkStyles.default}>
              <i className={sidebarLinkStyles.icon}>
                <FcBriefcase />
              </i>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms" className={sidebarLinkStyles.default}>
              <i className={sidebarLinkStyles.icon}>
                <FcDisclaimer />
              </i>
              Terms of use
            </Link>
          </li>
        </ul>
      </div>

      <button onClick={toggle} className={sidebarLinkStyles.moreButton}>
        {more ? "Less..." : "More..."}
      </button>
    </>
  );

  return (
    <>
      <aside className="hidden w-[275px] lg:block">
        {!session && <LoginCard />}

        <nav className="px-2">
          <MenuLinks />
        </nav>

        <div className={`mt-4 flex p-2 ${more ? "block" : "hidden"}`}>
          {socialLinks.map(({ Icon, url }, index) => (
            <Link
              key={index}
              href={url}
              className={sidebarLinkStyles.socialIcon}
            >
              <Icon />
            </Link>
          ))}
        </div>

        <nav className="px-2">
          <header className="flex items-center justify-between p-2">
            <h3 className={sidebarLinkStyles.tagHeader}>My Tags</h3>
            <i className="cursor-pointer rounded-lg p-2 text-2xl text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <CgShapeHexagon />
            </i>
          </header>
          <ul className="mr-3 h-[40vh] space-y-2 overflow-y-auto leading-loose">
            {tags.map((tag, id) => (
              <li key={id} className={`${sidebarLinkStyles.tagItem} py-1`}>
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
