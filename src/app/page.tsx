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
      <div className="w-full border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[1500px]">
          <Navigation openMenu={openMenu} />
        </div>
      </div>
      <div className="mx-auto max-w-[1500px] py-3">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[275px_1fr_275px] lg:grid-cols-[275px_1fr_275px]">
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
