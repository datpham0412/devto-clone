import React from "react";

const WhatsHappening: React.FC = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white mb-4">
      <div className="relative px-4 pt-4">
        <div className="text-sm text-gray-600 font-normal">👋 What's happening this week</div>

        <button
          id="sponsorship-dropdown-trigger"
          aria-controls="sponsorship-dropdown"
          aria-expanded="false"
          aria-haspopup="true"
          className="absolute right-4 top-2 p-2 hover:bg-gray-100 rounded-lg"
          aria-label="Toggle dropdown menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            role="img"
            className="pointer-events-none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            ></path>
          </svg>
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-[#404040]">Challenges 🤗</h3>

        <div className="border-2 border-gray-800 p-3 rounded-lg mb-4">
          <p className="mb-1">
            <span className="font-bold">
              <a href="https://dev.to/devteam/join-us-for-the-open-source-ai-challenge-with-pgai-and-ollama-3000-in-prizes-mjj" className="text-[#3B49DF] text-base underline hover:text-[#3B49DF]/80">
                The Open Source AI Challenge with pgai and Ollama
              </a>
            </span>
          </p>
          <p className="text-base text-gray-600 font-normal italic">Just announced!</p>
        </div>

        <div className="border-2 border-gray-800 p-3 rounded-lg mb-4">
          <p className="mb-1">
            <span className="font-bold">
              <a href="https://dev.to/devteam/join-the-2024-hacktoberfest-writing-challenge-reflect-on-your-journey-as-a-contributor-or-maintainer-nd0" className="text-[#3B49DF] text-base underline hover:text-[#3B49DF]/80">
                Hacktoberfest Writing Challenge
              </a>
            </span>
          </p>
          <p className="text-base text-gray-600 font-normal italic">Running all month long.</p>
        </div>

        <h4 className="text-base font-bold text-[#404040]">Have a great week ❤️</h4>
      </div>
    </div>
  );
};

export default WhatsHappening; 