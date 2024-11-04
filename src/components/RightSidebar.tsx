import React from "react";
import WhatsHappening from "./WhatsHappening";
import Discussions from "./Discussions";
import WaterCooler from "./WaterCooler";
import TrendingGuides from "./TrendingGuides";
import RecentlyQueried from "./RecentlyQueried";

const RightSidebar: React.FC = () => {
  return (
    <aside className="flex flex-col">
      <WhatsHappening />
      <Discussions />
      <WaterCooler />
      <TrendingGuides />
      <RecentlyQueried />
    </aside>
  );
};

export default RightSidebar;
