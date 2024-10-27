"use client";

import React, { useState } from "react";
import Link from 'next/link';
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

const LeftSidebar: React.FC<LeftSidebarProps> = ({ burgerMenu, closeMenu }) => {
  const [more, setMore] = useState(false);
  const toggle = () => {
    setMore(!more);
  };

  return (
    <>
      <aside className="leftBar">
        <nav className="leftBar__menu">
          <ul>
            <li>
              <Link href="/home">
                <i>
                  <FcHome />
                </i>
                Home
              </Link>
            </li>
            {/* ... rest of the menu items ... */}
          </ul>
        </nav>

        <div className={more ? "leftBar__social" : "leftBar__social hidden"}>
          {/* ... social media links ... */}
        </div>
        <nav className="leftBar__taglist">
          <header>
            <h3>My Tags</h3>
            <i>
              <CgShapeHexagon />
            </i>
          </header>
          <ul>
            {tags.map((tag, id) => (
              <li key={id}>
                <Link href={`/#${tag}`}>#{tag}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {burgerMenu && (
        <div className="hamburger">
          <div className="hamburger__content">
            <header>
              <h2>DEV Community</h2>
              <button onClick={closeMenu}>
                <GrFormClose />
              </button>
            </header>

            <div className="hamburger__content__items">
              {/* ... hamburger menu content ... */}
            </div>
          </div>

          <div className="hamburger overlay"></div>
        </div>
      )}
    </>
  );
};

export default LeftSidebar;
