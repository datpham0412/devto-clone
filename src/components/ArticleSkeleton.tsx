import React from "react";

const ArticleSkeleton: React.FC = () => {
  return (
    <div className="relative mx-auto my-5 overflow-hidden rounded-lg bg-white p-3">
      <div>
        <div className="not-first:hidden my-3 h-[200px] w-full overflow-hidden rounded-lg bg-gray-100" />

        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 overflow-hidden rounded-full bg-gray-100" />
          <div className="h-4 w-[30%] overflow-hidden rounded-lg bg-gray-100" />
        </div>

        <div className="my-3 ml-8 h-5 w-[60%] overflow-hidden rounded-lg bg-gray-100" />

        <div className="mb-12 ml-8 h-3 w-[40%] overflow-hidden rounded-lg bg-gray-100" />
      </div>

      <div className="absolute inset-0 h-full w-full animate-[loading_1.5s_infinite]">
        <div className="h-full w-[70%] bg-white/30 shadow-[0_0_2rem_2rem_rgba(255,255,255,0.2)]" />
      </div>
    </div>
  );
};

export default ArticleSkeleton;
