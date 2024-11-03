"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GrFormClose } from "react-icons/gr";
import type { IconType } from "react-icons";
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
import { ContactIcon } from "~/components/icons/ContactIcon";
import { PostgresIcon } from "~/components/icons/PostgresIcon";
import { GuideIcon } from "~/components/icons/GuideIcon";
import { SoftwareComparisonIcon } from "~/components/icons/SoftwareComparisonIcon";
import { CodeOfConductIcon } from "~/components/icons/CodeOfConductIcon";
import { PrivacyPolicyIcon } from "~/components/icons/PrivacyPolicyIcon";
import { TermsOfUseIcon } from "~/components/icons/TermsOfUseIcon";
import { TwitterIcon } from "~/components/icons/social/TwitterIcon";
import { FacebookIcon } from "~/components/icons/social/FacebookIcon";
import { GithubIcon } from "~/components/icons/social/GithubIcon";
import { InstagramIcon } from "~/components/icons/social/InstagramIcon";
import { TwitchIcon } from "~/components/icons/social/TwitchIcon";
import { MastodonIcon } from "~/components/icons/social/MastodonIcon";
import Image from "next/image";

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
  label: string;
}

const socialLinks: SocialLink[] = [
  { Icon: TwitterIcon, url: "https://twitter.com/thepracticaldev", label: "Twitter" },
  { Icon: FacebookIcon, url: "https://facebook.com/thepracticaldev", label: "Facebook" },
  { Icon: GithubIcon, url: "https://github.com/forem", label: "Github" },
  { Icon: InstagramIcon, url: "https://instagram.com/thepracticaldev", label: "Instagram" },
  { Icon: TwitchIcon, url: "https://twitch.com/thepracticaldev", label: "Twitch" },
  { Icon: MastodonIcon, url: "https://fosstodon.org/@thepracticaldev", label: "Mastodon" }
];

const DiamondSponsors = () => (
  <div className="mt-4 crayons-card crayons-card--secondary crayons-bb billboard js-billboard" 
       style={{ border: "5px solid #000", borderRadius: "8px" }}>
    <div className="crayons-bb__header relative">
      <div className="crayons-bb__title mt-1">💎 DEV Diamond Sponsors</div>
      
      <button 
        className="dropBtn crayons-bb__dropdown crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon mt-2" 
        aria-label="Toggle dropdown menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      </button>
    </div>

    <div className="p-4 pt-1 text-styles text-styles--billboard" style={{color: '#404040' }}>
      <h4 style={{color: '#404040', fontSize: '1rem'}}>Thank you to our Diamond Sponsor Neon</h4>
      <a href="https://neon.tech/?ref=devto" target="_blank" rel="noopener noreferrer">
        <Image 
          src="https://media2.dev.to/dynamic/image/width=350%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fbillboards.forem.tools%2Frails%2Factive_storage%2Fblobs%2Fredirect%2FeyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbGNDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--81f4f05c27808f68c1e91590ff950026157d3fd0%2FScreenshot%25202024-07-19%2520at%252012.04.24%25E2%2580%25AFPM.png"
          alt="Neon logo"
          width={824}
          height={320}
          className="rounded-lg mb-5"
        />
      </a>
      <p className="mb-4 text-base text-gray-600 font-normal italic">Neon is the official database partner of DEV</p>
      <p className="mb-4 text-base text-gray-600 font-normal">Happy coding ❤️</p>
    </div>
  </div>
);

const LeftSidebar: React.FC<LeftSidebarProps> = ({ burgerMenu, closeMenu }) => {
  const { data: session } = useSession();

  const LoginCard = () => (
    <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4">
      <h2 className="mb-4 text-xl font-bold leading-tight">
        DEV Community is a community of 2,298,425 amazing developers
      </h2>
      <p className="mb-4 text-base text-gray-600 font-normal">
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
              <ContactIcon />
            </i>
            Contact
          </Link>
        </li>
        <li>
          <Link href="/postgres" className={sidebarLinkStyles.default}>
            <i className={sidebarLinkStyles.icon}>
              <PostgresIcon />
            </i>
            Free Postgres Database
          </Link>
        </li>
        <li>
          <Link href="/guides" className={sidebarLinkStyles.default}>
            <i className={sidebarLinkStyles.icon}>
              <GuideIcon />
            </i>
            Guides
          </Link>
        </li>
        <li>
          <Link href="/comparisons" className={sidebarLinkStyles.default}>
            <i className={sidebarLinkStyles.icon}>
              <SoftwareComparisonIcon />
            </i>
            Software Comparisons
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
              <CodeOfConductIcon />
            </i>
            Code of Conduct
          </Link>
        </li>
        <li>
          <Link href="/privacy" className={sidebarLinkStyles.default}>
            <i className={sidebarLinkStyles.icon}>
              <PrivacyPolicyIcon />
            </i>
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="/terms" className={sidebarLinkStyles.default}>
            <i className={sidebarLinkStyles.icon}>
              <TermsOfUseIcon />
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
          <MenuLinks />
        <div className="mt-4 flex gap-4 p-2">
          {socialLinks.map(({ Icon, url, label }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              className="c-link c-link--icon-alone c-link--block"
              rel="noopener me"
            >
              <Icon />
            </a>
          ))}
        </div>

        <nav className="mt-2">
          <header className="flex items-center justify-between p-2">
            <h3 className={sidebarLinkStyles.tagHeader}>Popular Tags</h3>
            <i className="cursor-pointer rounded-lg p-2 text-2xl text-gray-600 hover:bg-gray-100 hover:text-gray-900">
            </i>
          </header>
          <ul className="mr-3 h-[40vh] space-y-2 overflow-y-auto leading-loose px-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
            {tags.map((tag, id) => (
              <li key={id} className={`${sidebarLinkStyles.tagItem} py-1`}>
                <Link href={`/#${tag}`}>#{tag}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <DiamondSponsors />
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
