import Link from "next/link";

interface DiscussionItem {
  id: number;
  title: string;
  href: string;
  comments?: number;
  isNew?: boolean;
}

const discussions: DiscussionItem[] = [
  {
    id: 1,
    title: "Launching the Ultimate GitHub Repository for Tech FAQs: Awesome 0x3d FAQ's Collection! 🎉",
    href: "https://dev.to/0x3d_site/launching-the-ultimate-github-repository-for-tech-faqs-awesome-0x3d-faqs-collection-2md7",
    comments: 1
  },
  {
    id: 2,
    title: "Improving the IT Hiring Experience - Insights Needed! 🤔",
    href: "https://dev.to/m_midas/improving-the-it-hiring-experience-insights-needed-39el",
    comments: 4
  },
  {
    id: 3,
    title: "Latest Newsletter: Debugging a nuclear reaction (Issue #188)",
    href: "https://dev.to/mjgs/latest-newsletter-debugging-a-nuclear-reaction-issue-188-59b3",
    isNew: true
  },
  {
    id: 4,
    title: "The Most Important Thing!",
    href: "https://dev.to/softwaredeveloping/the-most-important-thing-1hjg",
    comments: 3
  },
  {
    id: 5,
    title: "We launched SupaCharts! Visualize Beautiful Charts from your Supabase Data.",
    href: "https://dev.to/litlyx/we-launched-supacharts-visualize-beautiful-charts-from-your-supabase-data-5dk4",
    isNew: true
  }
];

const Discussions = () => {
  return (
    <section className="rounded-lg bg-white p-4 shadow-sm mb-4">
      <header className="mb-4">
        <h3 className="text-lg font-medium">
          <Link href="/t/discuss" className="text-[#404040] hover:text-[#2F3AB2] text-[20px] font-bold">
            #discuss
          </Link>
        </h3>
        <div className="text-xs text-[#575757] font-light">
          Discussion threads targeting the whole community
        </div>
      </header>
      <div className="h-px bg-gray-200 mx-[-1rem] my-2"></div>
      <div className="flex flex-col gap-4">
        {discussions.map((discussion, index) => (
          <>
            <Link
              key={discussion.id}
              href={discussion.href}
              className="group flex flex-col gap-1 text-gray-900 hover:text-blue-800"
            >
              <span className="mb-2 pt-1 text-base text-gray-600 font-normal hover:text-[#2F3AB2]">{discussion.title}</span>
              <div className="pt-1 text-[14px] text-[#575757] font-normal">
                {discussion.comments && `${discussion.comments} comment${discussion.comments !== 1 ? 's' : ''}`}
                {discussion.isNew && (
                  <span className="rounded bg-yellow-300 px-2 py-1 text-yellow-900">
                    New
                  </span>
                )}
              </div>
            </Link>
            {index !== discussions.length - 1 && <div className="h-px bg-gray-200 mx-[-1rem]"></div>}
          </>
        ))}
      </div>
    </section>
  );
};

export default Discussions;