import Link from "next/link";

interface GuideItem {
  id: number;
  title: string;
  href: string;
}

const guides: GuideItem[] = [
  {
    id: 1,
    title: "8 System Design Courses to learn Distributed System Architecture (2025)",
    href: "https://dev.to/somadevtoo/8-system-design-couress-to-learn-distributed-system-architecture-2025-4j81"
  },
  {
    id: 2,
    title: "1 Year of Consistent LeetCoding",
    href: "https://dev.to/davinderpalrehal/1-year-of-consistent-leetcoding-26d0"
  },
  {
    id: 3,
    title: "Scripting in DevOps: A Complete Guide from Beginner to Advanced",
    href: "https://dev.to/prodevopsguytech/scripting-in-devops-a-complete-guide-from-beginner-to-advanced-noa"
  },
  {
    id: 4,
    title: "How Senior Software Engineers Document Their Project",
    href: "https://dev.to/koladev/how-senior-software-engineers-document-their-project-1nf4"
  },
  {
    id: 5,
    title: "10 Scalability Lessons from Zoom's Software Architecture",
    href: "https://dev.to/somadevtoo/10-scalability-lessons-from-zooms-software-architecture-6g3"
  },
  {
    id: 6,
    title: "16 Open Source Alternatives to Replace Popular SaaS Software & Apps 👨‍💻🔥",
    href: "https://dev.to/madza/16-open-source-alternatives-to-replace-popular-saas-software-apps-3d1n"
  },
  {
    id: 7,
    title: "How does Apache Kafka work? Why is Kafka So fast?",
    href: "https://dev.to/somadevtoo/how-does-apache-kafka-work-why-is-kafka-so-fast-463i"
  },
  {
    id: 8,
    title: "Top 16 System Design Resources for Programming Interviews",
    href: "https://dev.to/somadevtoo/top-15-system-design-resources-for-programming-interviews-1m15"
  },
  {
    id: 9,
    title: "DevOps Automation with Shell Scripting 🚀",
    href: "https://dev.to/prodevopsguytech/devops-automation-with-shell-scripting-1p69"
  },
  {
    id: 10,
    title: "10 JavaScript concepts every Node developer must master",
    href: "https://dev.to/usman_awan/10-javascript-concepts-every-node-developer-must-master-2na"
  },
  {
    id: 11,
    title: "AWS S3 appears to be down",
    href: "https://dev.to/ben/aws-s3-appears-to-be-down-4d0b"
  },
  {
    id: 12,
    title: "npm Vs npx",
    href: "https://dev.to/jagroop2001/npm-vs-npx-1anc"
  },
  {
    id: 13,
    title: "Maxum: Open Source No-Code Web Data Extraction Platform 🔥",
    href: "https://dev.to/karishmashukla/maxun-open-source-no-code-web-data-extraction-platform-4316"
  },
  {
    id: 14,
    title: "20 JavaScript Tricks Every Developer Must Know 💕",
    href: "https://dev.to/jagroop2001/20-javascript-tricks-every-developer-must-know-4pcj"
  },
  {
    id: 15,
    title: "Five Design Patterns to know in Node.js",
    href: "https://dev.to/jacobandrewsky/five-design-patterns-to-know-in-nodejs-265h"
  },
  {
    id: 16,
    title: "Dockerfile Best Practices: How to Create Efficient Containers",
    href: "https://dev.to/idsulik/dockerfile-best-practices-how-to-create-efficient-containers-4p8o"
  },
  {
    id: 17,
    title: "How to Flirt with a Developer: Learn to Debug Your Love Life",
    href: "https://dev.to/ssukhpinder/how-to-flirt-with-a-developer-learn-to-debug-your-love-life-1b6d"
  },
  {
    id: 18,
    title: "20 Git Command-Line Tricks Every Developer Should Know",
    href: "https://dev.to/jagroop2001/20-git-command-line-tricks-every-developer-should-know-1i21"
  },
  {
    id: 19,
    title: "5 open source tools to boost your productivity",
    href: "https://dev.to/codewithshahan/5-open-source-tools-every-developer-should-know-5ffm"
  },
  {
    id: 20,
    title: "Top 10 VSCode Extensions for JavaScript Developers",
    href: "https://dev.to/balrajola/top-10-modern-javascript-patterns-for-2025-1hle"
  }
];

const TrendingGuides = () => {
  return (
    <section className="mt-4 mb-4 px-4">
      <header className="mb-4">
        <h3 className="text-lg font-medium">
          <span className="text-[#171717] text-[14.4px] font-bold" style={{fontFamily: "SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace"}}>
            trending guides/resources
          </span>
        </h3>
      </header>
      <div className="flex flex-col">
        {guides.map((guide) => (
          <Link
            key={guide.id}
            href={guide.href}
            className="group flex flex-col gap-1 text-gray-900 hover:text-[#2F3AB2] hover:bg-white rounded transition-colors duration-200 px-4 py-4"
          >
            <span className="text-base text-gray-600 font-normal group-hover:text-[#2F3AB2]">{guide.title}</span>
          </Link>
        ))}
      </div>
      <div className="h-px bg-gray-300 mx-[-1rem] mt-4 mb-2"></div>
    </section>
    
  );
};

export default TrendingGuides;