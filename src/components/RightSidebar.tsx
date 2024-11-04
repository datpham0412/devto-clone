import React from "react";
import WhatsHappening from "./WhatsHappening";
import Discussions from "./Discussions";
import WaterCooler from "./WaterCooler";
import TrendingGuides from "./TrendingGuides";

const RightSidebar: React.FC = () => {
  return (
    <aside className="flex flex-col">
      <WhatsHappening />
      <Discussions />
      <WaterCooler />
      <TrendingGuides />
    </aside>
  );
};

export default RightSidebar;
