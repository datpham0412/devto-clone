"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const Navigation = dynamic(() => import('~/components/Navigation'), { ssr: false });
const LeftSidebar = dynamic(() => import('~/components/LeftSidebar'), { ssr: false });
const Content = dynamic(() => import('~/components/Content'), { ssr: false });
const RightSidebar = dynamic(() => import('~/components/RightSidebar'), { ssr: false });

function HomeClient() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);

  const openMenu = React.useCallback(() => setIsBurgerMenuOpen(true), []);
  const closeMenu = React.useCallback(() => setIsBurgerMenuOpen(false), []);

  return (
    <div className="home-container">
      <Navigation openMenu={openMenu} />
      <main className="main-content">
        <LeftSidebar burgerMenu={isBurgerMenuOpen} closeMenu={closeMenu} />
        <Content />
        <RightSidebar />
      </main>
    </div>
  );
}

export default function Home() {
  return <HomeClient />;
}
