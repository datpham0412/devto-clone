"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FcLike,
  FcBriefcase,
  FcDisclaimer,
  FcBusinessContact,
} from "react-icons/fc";
import { FaDev } from "react-icons/fa";
import { IoLogoTwitter, IoLogoFacebook, IoLogoGithub } from "react-icons/io";
import { RiInstagramFill, RiTwitchLine } from "react-icons/ri";
import { CgShapeHexagon } from "react-icons/cg";
import { GrFormClose } from "react-icons/gr";
import type { IconType } from "react-icons";
import { HiOutlineLightBulb } from "react-icons/hi";
import { CgShoppingBag } from "react-icons/cg";
import { RiFileList3Line } from "react-icons/ri";
import { HomeIcon } from "~/components/icons/HomeIcon";
import { sidebarLinkStyles } from "~/styles/sidebar";
import { useSession } from "next-auth/react";
import { DevPlusIcon } from "~/components/icons/DevPlusIcon";
import { PodcastIcon } from "~/components/icons/PodcastIcon";
import { VideoIcon } from "~/components/icons/VideoIcon";
import { TagIcon } from "~/components/icons/TagIcon";
import { HelpIcon } from "~/components/icons/HelpIcon";
import { ShopIcon } from "~/components/icons/ShopIcon";
import { AdvertiseIcon } from "~/components/icons/AdvertiseIcon";
import { ChallengesIcon } from "~/components/icons/ChallengesIcon";
import { ShowcaseIcon } from "~/components/icons/ShowcaseIcon";
import { AboutIcon } from "~/components/icons/AboutIcon";

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
  const { data: session } = useSession();

  const LoginCard = () => (
    <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4">
      <h2 className="mb-4 text-xl font-bold leading-tight">
        DEV Community is a community of 2,298,425 amazing developers
      </h2>
      <p className="mb-4 text-base text-gray-600">
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
          className="flex w-full items-center justify-center rounded-lg px-3 py-1.5 text-base text-gray-600 hover:bg-gray-50 hover:text-gray-700"
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
              <DevPlusIcon />
            </i>
            DEV++
          </Link>
        </li>
        <li>
          <Link href="/podcast" className={sidebarLinkStyles.default}>
            <i className={sidebarLinkStyles.icon}>
              <PodcastIcon />
            </i>
            Podcasts
          </Link>
        </li>
        <li>
          <Link href="/videos" className={sidebarLinkStyles.default}>
            <i className={sidebarLinkStyles.icon}>
              <VideoIcon />
            </i>
            Videos
          </Link>
        </li>
        <li>
          <Link href="/tags" className={sidebarLinkStyles.default}>
            <i className={sidebarLinkStyles.icon}>
              <TagIcon />
            </i>
            Tags
          </Link>
        </li>
        <li>
          <Link href="/help" className={sidebarLinkStyles.default}>
            <i className={sidebarLinkStyles.icon}>
              <HelpIcon />
            </i>
            DEV Help
          </Link>
        </li>
        <li>
          <Link href="/shop" className={sidebarLinkStyles.default}>
            <i className={sidebarLinkStyles.icon}>
              <ShopIcon />
            </i>
            Forem Shop
          </Link>
        </li>

        <li>
          <div className={sidebarLinkStyles.divider} />
        </li>

        <li>
          <Link href="/advertise" className={sidebarLinkStyles.default}>
            <i className={sidebarLinkStyles.icon}>
              <AdvertiseIcon />
            </i>
            Advertise on DEV
          </Link>
        </li>
        <li>
          <Link href="/challenges" className={sidebarLinkStyles.default}>
            <i className={sidebarLinkStyles.icon}>
              <ChallengesIcon />
            </i>
            DEV Challenges
          </Link>
        </li>
        <li>
          <Link href="/showcase" className={sidebarLinkStyles.default}>
            <i className={sidebarLinkStyles.icon}>
              <ShowcaseIcon />
            </i>
            DEV Showcase
          </Link>
        </li>
        <li>
          <Link href="/about" className={sidebarLinkStyles.default}>
            <i className={sidebarLinkStyles.icon}>
              <AboutIcon />
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

        <li>
          <div className={sidebarLinkStyles.divider} />
        </li>

        <li>
          <h3 className={sidebarLinkStyles.sectionHeader}>Other</h3>
        </li>

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
    </>
  );

  return (
    <>
      <aside className="hidden w-[240px] lg:block">
        {!session && <LoginCard />}

        <nav className="px-2">
          <MenuLinks />
        </nav>

        <div className="mt-4 flex p-2">
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
