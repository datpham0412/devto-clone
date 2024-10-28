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
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navigation openMenu={openMenu} />
      <div className="mx-auto max-w-[1280px] px-4 py-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[240px_1fr] lg:grid-cols-[240px_2fr_1fr]">
          <div className="hidden md:block">
            <LeftSidebar burgerMenu={isBurgerMenuOpen} closeMenu={closeMenu} />
          </div>
          <div>
            <Content />
          </div>
          <div className="hidden lg:block">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return <HomeClient />;
}
