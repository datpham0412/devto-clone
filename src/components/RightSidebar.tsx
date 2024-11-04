import React from "react";
import WhatsHappening from "./WhatsHappening";
import Discussions from "./Discussions";
import WaterCooler from "./WaterCooler";

const RightSidebar: React.FC = () => {
  return (
    <aside className="flex flex-col">
      <WhatsHappening />
      <Discussions />
      <WaterCooler />
    </aside>
  );
};

export default RightSidebar;
