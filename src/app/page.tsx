"use client";

import React from "react";
import dynamic from "next/dynamic";

const Navigation = dynamic(() => import("~/components/Navigation"), {
  ssr: false,
});
const LeftSidebar = dynamic(() => import("~/components/LeftSidebar"), {
  ssr: false,
});
const Content = dynamic(() => import("~/components/Content"), { ssr: false });
const RightSidebar = dynamic(() => import("~/components/RightSidebar"), {
  ssr: false,
});

function HomeClient() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);

  const openMenu = React.useCallback(() => setIsBurgerMenuOpen(true), []);
  const closeMenu = React.useCallback(() => setIsBurgerMenuOpen(false), []);

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-semibold">
      {/* Navigation - Fixed on all screens */}
      <div className="sticky top-0 z-30 w-full border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[1380px]">
          <Navigation openMenu={openMenu} />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mx-auto max-w-[1380px] px-4 py-3 sm:px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[200px_1fr] lg:grid-cols-[220px_1fr_300px] xl:grid-cols-[240px_1fr_360px]">
          {/* Left Sidebar - Hidden on mobile */}
          <div className="hidden md:block">
            <LeftSidebar burgerMenu={isBurgerMenuOpen} closeMenu={closeMenu} />
          </div>
          
          {/* Main Content */}
          <main className="min-w-0">
            <Content />
          </main>

          {/* Right Sidebar - Hidden on mobile and tablet */}
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
