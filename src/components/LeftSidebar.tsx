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
       style={{ border: "5px solid #000", borderRadius: "8px", backgroundColor: "white" }}>
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

const CommunityBillboard = () => (
  <div className="mt-4 crayons-card crayons-card--secondary crayons-bb billboard js-billboard" style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
    <div className="crayons-bb__header relative">
      <div className="crayons-bb__title">DEV Community</div>

      <button 
        id="sponsorship-dropdown-trigger-877"
        aria-controls="sponsorship-dropdown-877"
        aria-expanded="false"
        aria-haspopup="true"
        className="dropBtn crayons-bb__dropdown crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon"
        aria-label="Toggle dropdown menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="billboard-menu" className="rounded-lg mb-5">
          <title id="billboard-menu">Dropdown menu</title>
          <path fillRule="evenodd" clipRule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      </button>
    </div>

    <div className="p-1 pt-3 text-styles text-styles--billboard">
      <p>
        <a href="https://dev.to/enter?state=new-user&bb=877">
          <Image 
            src="https://media2.dev.to/dynamic/image/width=350%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fvgwfh7hesdncf0pv57j1.png"
            alt="Join the Community!"
            width={1200}
            height={1262}
            className="w-full px-4 mb-10"
          />
        </a>
      </p>
    </div>
  </div>
);

const Footer = () => (
  <footer className="mt-6 text-sm text-gray-600 font-normal sidebar-footer">
    <p>
      <Link href="/" className="text-[#3B49DF] font-medium" aria-label="DEV Community Home">
        DEV Community
      </Link>
      {"  "}
      A constructive and inclusive social network for software developers. With you every step of your journey.
    </p>

    <p className="mt-4">
      Built with the{" "}
      <a className="text-[#3B49DF]" target="_blank" rel="noopener" href="https://create.t3.gg">
        T3 Stack
      </a>
      {" — "}featuring{" "}
      <a target="_blank" rel="noopener" className="text-[#3B49DF]" href="https://prisma.io">
        Prisma
      </a>
      {", "}
      <a target="_blank" rel="noopener" className="text-[#3B49DF]" href="https://trpc.io">
        tRPC
      </a>
      {", "}
      <a target="_blank" rel="noopener" className="text-[#3B49DF]" href="https://nextjs.org">
        Next.js
      </a>
      {", "}
      <a target="_blank" rel="noopener" className="text-[#3B49DF]" href="https://next-auth.js.org">
        NextAuth
      </a>
      {", and "}
      <a target="_blank" rel="noopener" className="text-[#3B49DF]" href="https://tailwindcss.com">
        Tailwind
      </a>
      {". Powered by "}
      <a target="_blank" rel="noopener" className="text-[#3B49DF]" href="https://supabase.com">
        Supabase
      </a>
      {" for open source backend services."}
    </p>

    <p className="mt-4">
      Made by{" "}
      <a target="_blank" rel="noopener" className="text-[#3B49DF]" href="https://github.com/datpham0412">
        Dat Pham
      </a>
      {" © 2024"}
    </p>
  </footer>
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
      <div className="flex flex-col gap-1">
        <Link
          href="/auth/signup"
          className="c-cta c-cta--branded mr-2 flex w-full items-center justify-center whitespace-nowrap rounded-md border border-[#3B49DF] px-3 py-2 text-base text-[#3B49DF] hover:bg-[#3B49DF] hover:text-white hover:underline"
          data-tracking-id="ca_left_sidebar_home_page"
          data-tracking-source="left_sidebar"
        >
          Create account
        </Link>
        <Link
          href="/auth/signin"
          className="flex w-full items-center justify-center rounded-md px-4 py-2 text-base text-gray-600 font-normal hover:text-[#2F3AB2] hover:bg-[#3B49DF1A] hover:underline"
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
      {/* Desktop Sidebar */}
      <aside className="hidden md:block">
        <div className="space-y-4 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {!session && <LoginCard />}
          <MenuLinks />
          <div className="mt-4 flex flex-wrap gap-4 p-2">
            {socialLinks.map(({ Icon, url, label }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                className="text-gray-600 hover:text-gray-900"
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
            <ul className="mr-3 h-[40vh] space-y-2 overflow-y-auto leading-loose pr-2 
              scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 
              hover:scrollbar-thumb-gray-400">
              {tags.map((tag, id) => (
                <li key={id} className={`${sidebarLinkStyles.tagItem} py-1`}>
                  <Link href={`/#${tag}`}>#{tag}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <DiamondSponsors />
          <CommunityBillboard />
          <Footer />
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {burgerMenu && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={closeMenu}
          />
          <div className="relative h-full w-[90%] max-w-[300px] overflow-y-auto bg-white">
            <header className="sticky top-0 z-10 flex items-center border-b border-gray-200 bg-white p-4">
              <h2 className="flex-1 text-lg font-bold">DEV Community</h2>
              <button
                onClick={closeMenu}
                className="rounded-full p-2 hover:bg-gray-100"
              >
                <GrFormClose size={24} />
              </button>
            </header>

            <div className="p-4">
              {!session && <LoginCard />}
              <MenuLinks />
              <div className="mt-4 flex flex-wrap gap-4">
                {socialLinks.map(({ Icon, url, label }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    className="text-gray-600 hover:text-gray-900"
                    rel="noopener me"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeftSidebar;
