import React from "react";
import WhatsHappening from "./WhatsHappening";
import Discussions from "./Discussions";
import WaterCooler from "./WaterCooler";
import TrendingGuides from "./TrendingGuides";
import RecentlyQueried from "./RecentlyQueried";

const RightSidebar: React.FC = () => {
  return (
    <aside className="flex flex-col gap-4">
      <div className="space-y-4 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <WhatsHappening />
        <Discussions />
        <WaterCooler />
        <TrendingGuides />
        <RecentlyQueried />
      </div>
    </aside>
  );
};

export default RightSidebar;
