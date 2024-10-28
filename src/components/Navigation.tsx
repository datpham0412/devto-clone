"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaDev } from "react-icons/fa";
import { BiMessageRoundedCheck } from "react-icons/bi";
import { RiNotificationLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { supabase } from "~/lib/supabase";
import type { User } from '@supabase/supabase-js';

interface NavigationProps {
  openMenu: () => void;
}

// Add MenuLink interface
interface MenuLink {
  text: string;
  href: string;
}

const Navigation: React.FC<NavigationProps> = ({ openMenu }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setShowMenu(false);
  };

  const handleGithubLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    });
  };

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    });
  };

  const menuLinks: MenuLink[] = [
    { text: "Dashboard", href: "/dashboard" },
    { text: "Writing a Post", href: "/post" },
    { text: "Reading list", href: "/list" },
    { text: "Settings", href: "/settings" },
    { text: "Signout", href: "/signout" },
  ];

  const userAvatar = user?.user_metadata?.avatar_url as string | undefined;
  const avatarUrl = userAvatar ?? "https://picsum.photos/200";

  return (
    <header className="flex h-[56px] w-full max-w-full bg-white px-12 py-4">
      <div className="flex w-full max-w-[1280px] items-center">
        {/* Hamburger Menu */}
        <div
          onClick={openMenu}
          className="group relative mr-4 hidden h-[2px] w-5 cursor-pointer bg-gray-900 before:block before:h-[2px] before:w-5 before:-translate-y-2 before:bg-gray-900 before:content-[''] after:block after:h-[2px] after:w-5 after:translate-y-1 after:bg-gray-900 after:content-['']"
        />

        {/* Logo */}
        <Link href="https://dev.to" className="flex items-center text-black">
          <FaDev size="3.125rem" />
        </Link>

        {/* Search Box */}
        <div className="mx-4 max-w-[420px] flex-1">
          <form>
            <input
              type="text"
              placeholder="Search..."
              aria-label="search"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-base outline-none focus:bg-white focus:shadow-[1px_1px_0_0_#3b49df]"
            />
          </form>
        </div>

        {/* Right Section */}
        <div className="ml-auto flex items-center">
          {user ? (
            <>
              <button className="mr-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                Write a post
              </button>
              <i className="hidden">
                <FiSearch />
              </i>
              {[BiMessageRoundedCheck, RiNotificationLine].map((Icon, index) => (
                <i
                  key={index}
                  className="mx-4 flex cursor-pointer items-center rounded-full p-2 text-2xl text-gray-700 hover:bg-gray-100/50 hover:text-gray-900 hover:shadow-[0_0_0_10px_rgba(0,0,0,0.05)]"
                >
                  <Icon />
                </i>
              ))}
              <span onClick={() => setShowMenu(!showMenu)} className="mx-4 h-8 w-8 cursor-pointer">
                <Image
                  src={avatarUrl}
                  alt="Profile Picture"
                  width={32}
                  height={32}
                  className="h-full w-full rounded-full hover:shadow-[0_0_0_5px_rgba(0,0,0,0.05)]"
                />
              </span>
            </>
          ) : (
            <div className="flex gap-2">
              <Link
                href="/auth/signin"
                className="rounded-lg px-4 py-2 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
              >
                Log in
              </Link>
              <Link
                href="/auth/signup"
                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Create account
              </Link>
            </div>
          )}
        </div>
      </div>

      {showMenu && user && (
        <div className="absolute right-16 top-[56px] z-10 min-w-[250px] rounded-lg border-2 border-gray-900 bg-white shadow-[4px_4px_0_0_rgba(0,0,0,0.9)]">
          <ul>
            <li className="cursor-pointer border-b border-gray-200 p-3">
              <Link href={`/user/${user.user_metadata.user_name}`}>
                <div className="font-normal">{user.user_metadata.full_name}</div>
                <small className="text-gray-500">@{user.user_metadata.user_name}</small>
              </Link>
            </li>
            {menuLinks.map((link, index) => (
              <li
                key={index}
                onClick={() => setShowMenu(false)}
                className={`cursor-pointer p-2 leading-relaxed transition-all hover:bg-gray-50 hover:text-blue-800 ${
                  index === menuLinks.length - 1 ? "border-t border-gray-200" : ""
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
