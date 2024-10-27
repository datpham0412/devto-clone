"use client";

import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { FaDev } from "react-icons/fa";
import { BiMessageRoundedCheck } from "react-icons/bi";
import { RiNotificationLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

interface NavigationProps {
  openMenu: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ openMenu }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <div className="headerContainer">
        <div
          className="headerContainer__hamburgerMenu"
          onClick={openMenu}
        ></div>
        <Link href="/" className="headerContainer__logo">
          <FaDev size="3.125rem" />
        </Link>

        <div className="headerContainer__searchBox">
          <form>
            <input type="text" placeholder="Search..." aria-label="search" />
          </form>
        </div>

        <div className="headerContainer__right">
          <button>Write a post</button>
          <i className="hidden-search">
            <FiSearch />
          </i>
          <i>
            <BiMessageRoundedCheck />
          </i>
          <i>
            <RiNotificationLine />
          </i>

          <span onClick={toggle}>
            <Image src="https://picsum.photos/200" alt="Profile Picture" width={32} height={32} />
          </span>
        </div>
      </div>

      <div className={showMenu ? "dropdown-menu" : "dropdown-menu-close"}>
        <ul>
          <li onClick={toggle}>
            <Link href="/profile">
              <div className="u-name">CodeBucks</div>
              <small className="u-name-id">@codebucks</small>
            </Link>
          </li>
          <li onClick={toggle}><Link href="/dashboard">Dashboard</Link></li>
          <li onClick={toggle}><Link href="/post">Writing a Post</Link></li>
          <li onClick={toggle}><Link href="/list">Reading list</Link></li>
          <li onClick={toggle}><Link href="/settings">Settings</Link></li>
          <li onClick={toggle}><Link href="/signout">Signout</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
