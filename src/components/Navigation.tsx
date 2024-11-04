"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaDev } from "react-icons/fa";
import { RiNotificationLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { useSession, signOut } from "next-auth/react";

interface NavigationProps {
  openMenu: () => void;
}

interface MenuLink {
  text: string;
  href: string;
}

const Navigation: React.FC<NavigationProps> = ({ openMenu }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { data: session, status } = useSession();

  const handleSignOut = async () => {
    await signOut();
    setShowMenu(false);
  };

  const menuLinks: MenuLink[] = [
    { text: "Dashboard", href: "/dashboard" },
    { text: "Writing a Post", href: "/post" },
    { text: "Reading list", href: "/list" },
    { text: "Settings", href: "/settings" },
  ];

  const userAvatar = session?.user?.image;
  const avatarUrl = userAvatar ?? "https://picsum.photos/200";
  const username = session?.user?.username;
  const name = session?.user?.name;

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <header className="flex h-[56px] w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1380px] items-center">
        {/* Hamburger Menu */}
        <div
          onClick={openMenu}
          className="group relative mr-4 hidden h-[2px] w-5 cursor-pointer bg-gray-900 before:block before:h-[2px] before:w-5 before:-translate-y-2 before:bg-gray-900 before:content-[''] after:block after:h-[2px] after:w-5 after:translate-y-1 after:bg-gray-900 after:content-['']"
        />

        {/* Logo */}
        <Link href="/" className="flex items-center py-2 text-black">
          <FaDev size="3rem" />
        </Link>

        {/* Search Box */}
        <div className="relative mx-4 max-w-[700px] flex-1">
          <form className="relative">
            <input
              type="text"
              placeholder="Search..."
              aria-label="search"
              className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-base outline-none focus:shadow-[1px_1px_0_0_#3b49df]"
              autoComplete="off"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="text-gray-600"
                focusable="false"
              >
                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z" />
              </svg>
            </button>
            <Link
              href="https://www.algolia.com/developers/?utm_source=devto&utm_medium=referral"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1 p-1 text-sm text-gray-500 hover:text-gray-700"
            >
              Powered by
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 500 500.34"
              >
                <path d="M250,0C113.38,0,2,110.16,.03,246.32c-2,138.29,110.19,252.87,248.49,253.67,42.71,.25,83.85-10.2,120.38-30.05,3.56-1.93,4.11-6.83,1.08-9.52l-23.39-20.74c-4.75-4.22-11.52-5.41-17.37-2.92-25.5,10.85-53.21,16.39-81.76,16.04-111.75-1.37-202.04-94.35-200.26-206.1,1.76-110.33,92.06-199.55,202.8-199.55h202.83V407.68l-115.08-102.25c-3.72-3.31-9.43-2.66-12.43,1.31-18.47,24.46-48.56,39.67-81.98,37.36-46.36-3.2-83.92-40.52-87.4-86.86-4.15-55.28,39.65-101.58,94.07-101.58,49.21,0,89.74,37.88,93.97,86.01,.38,4.28,2.31,8.28,5.53,11.13l29.97,26.57c3.4,3.01,8.8,1.17,9.63-3.3,2.16-11.55,2.92-23.6,2.07-35.95-4.83-70.39-61.84-127.01-132.26-131.35-80.73-4.98-148.23,58.18-150.37,137.35-2.09,77.15,61.12,143.66,138.28,145.36,32.21,.71,62.07-9.42,86.2-26.97l150.36,133.29c6.45,5.71,16.62,1.14,16.62-7.48V9.49C500,4.25,495.75,0,490.51,0H250Z" />
              </svg>
              Algolia
            </Link>
          </form>
        </div>

        {/* Right Section */}
        <div className="ml-auto flex items-center">
          {session ? (
            <>
              <Link 
                href="/"
                className="mr-2 whitespace-nowrap rounded-md border border-[#3B49DF] px-4 py-2 text-base text-[#3B49DF] hover:bg-[#3B49DF] hover:text-white hover:underline"
              >
                Create Post
              </Link>
              <i className="hidden">
                <FiSearch />
              </i>
              {[RiNotificationLine].map(
                (Icon, index) => (
                  <i
                    key={index}
                    className="flex cursor-pointer items-center rounded-md p-2 text-2xl text-gray-600 hover:bg-[#3B49DF1A] hover:text-[#2F3AB2]"
                  >
                    <Icon size={24} />
                  </i>
                ),
              )}
              <span
                onClick={() => setShowMenu(!showMenu)}
                className="mx-4 h-10 w-10 cursor-pointer"
              >
                <Image
                  src={avatarUrl}
                  alt="Profile Picture"
                  width={40}
                  height={40}
                  className="h-full w-full rounded-full hover:shadow-[0_0_0_5px_rgba(0,0,0,0.05)]"
                />
              </span>
            </>
          ) : (
            <div className="flex gap-2">
              <Link
                href="/auth/signin"
                className="rounded-md px-4 py-2 text-base text-gray-600 font-normal hover:text-[#2F3AB2] hover:bg-[#3B49DF1A] hover:underline"
              >
                Log in
              </Link>
              <Link
                href="/auth/signup"
                className="c-cta c-cta--branded mr-2 whitespace-nowrap rounded-md border border-[#3B49DF] px-4 py-2 text-base text-[#3B49DF] hover:bg-[#3B49DF] hover:text-white hover:underline"
              >
                Create account
              </Link>
            </div>
          )}
        </div>
      </div>

      {showMenu && session && (
        <div className="absolute right-16 top-[56px] z-10 min-w-[250px] rounded-lg border-2 border-gray-900 bg-white shadow-[4px_4px_0_0_rgba(0,0,0,0.9)]">
          <ul>
            <li className="cursor-pointer border-b border-gray-200 p-3">
              <Link href={`/user/${username}`}>
                <div className="font-normal">{name}</div>
                <small className="text-gray-500">@{username}</small>
              </Link>
            </li>
            {menuLinks.map((link, index) => (
              <li
                key={index}
                onClick={() => setShowMenu(false)}
                className={`cursor-pointer p-2 leading-relaxed transition-all hover:bg-gray-50 hover:text-blue-800 ${
                  index === menuLinks.length - 1
                    ? "border-t border-gray-200"
                    : ""
                }`}
              >
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
            <li className="cursor-pointer border-t border-gray-200 p-2">
              <button onClick={handleSignOut} className="w-full text-left">
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
