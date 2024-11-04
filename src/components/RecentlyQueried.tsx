import Link from "next/link";

interface QueryItem {
  id: number;
  title: string;
  href: string;
}

const queries: QueryItem[] = [
  {
    id: 1,
    title: "Pascal Case",
    href: "https://dev.to/prahladyeri/underscores-camelcasing-and-pascalcasing-the-three-naming-conventions-every-programmer-should-be-aware-of-3aed"
  },
  {
    id: 2,
    title: "Fedora vs Ubuntu",
    href: "https://dev.to/prahladyeri/is-ubuntu-or-fedora-a-better-distro-for-programmers-4lao"
  },
  {
    id: 3,
    title: "CSS Game",
    href: "https://dev.to/devmount/8-games-to-learn-css-the-fun-way-4e0f"
  },
  {
    id: 4,
    title: "Spotify Shuffle Sucks",
    href: "https://dev.to/bytebodger/spotify-s-random-fail-14d4"
  },
  {
    id: 5,
    title: "Is CSS a Programming Language",
    href: "https://dev.to/desi/are-css-and-html-programming-languages-1lmn"
  },
  {
    id: 6,
    title: "Button Animation CSS",
    href: "https://dev.to/webdeasy/top-20-css-buttons-animations-f41"
  },
  {
    id: 7,
    title: "Rails Transaction",
    href: "https://dev.to/sulmanweb/active-record-transactions-in-ruby-on-rails-3ok6"
  },
  {
    id: 8,
    title: "React Native Carousel",
    href: "https://dev.to/lloyds-digital/let-s-create-a-carousel-in-react-native-4ae2"
  },
  {
    id: 9,
    title: "Best Software Development Books",
    href: "https://dev.to/awwsmm/20-most-recommended-books-for-software-developers-5578"
  },
  {
    id: 10,
    title: "Amazon Online Assessment",
    href: "https://dev.to/awwsmm/what-i-learned-from-bombing-an-amazon-coding-assessment-4aom"
  },
  {
    id: 11,
    title: "What Does API Stand For",
    href: "https://dev.to/awwsmm/eli5-what-is-an-api-1dd2"
  },
  {
    id: 12,
    title: "Linux Bash Commands",
    href: "https://dev.to/awwsmm/101-bash-commands-and-tips-for-beginners-to-experts-30je"
  },
  {
    id: 13,
    title: "Haiku Checker",
    href: "https://dev.to/thepracticaldev/daily-challenge-229-haiku-validator-d29"
  },
  {
    id: 14,
    title: "Meetup Alternatives",
    href: "https://dev.to/joshed/meet-these-open-source-alternatives-to-meetup-com-53d"
  },
  {
    id: 15,
    title: "JavaScript Playground",
    href: "https://dev.to/vuelancer/free-online-code-playground-for-html-css-javascript-3kk4"
  },
  {
    id: 16,
    title: "Ngrok Alternative",
    href: "https://dev.to/0xkoji/the-alternative-of-ngrok-53ob"
  },
  {
    id: 17,
    title: "Vscode Vim",
    href: "https://dev.to/ben/vscode-vs-vim-22og"
  },
  {
    id: 18,
    title: "&Nbsp Meaning",
    href: "https://dev.to/ben/nbsp-stands-for-non-breaking-space-3bei"
  },
  {
    id: 19,
    title: "Django Allauth",
    href: "https://dev.to/gajesh/the-complete-django-allauth-guide-la3"
  },
  {
    id: 20,
    title: "JavaScript Interview Questions and Answers",
    href: "https://dev.to/macmacky/70-javascript-interview-questions-5gfi"
  }
];

const RecentlyQueried = () => {
  return (
    <section className="mt-4 mb-4 px-4">
      <header className="mb-4">
        <h3 className="text-lg font-medium">
          <span className="text-[#171717] text-[14.4px] font-bold" style={{fontFamily: "SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace"}}>
            recently queried
          </span>
        </h3>
      </header>
      <div className="flex flex-col">
        {queries.map((query) => (
          <Link
            key={query.id}
            href={query.href}
            className="group flex flex-col gap-1 text-gray-900 hover:text-[#2F3AB2] hover:bg-white rounded transition-colors duration-200 px-4 py-4"
          >
            <span className="text-base text-gray-600 font-normal group-hover:text-[#2F3AB2]">{query.title}</span>
          </Link>
        ))}
      </div>
      <div className="h-px bg-gray-300 mx-[-1rem] mt-4 mb-2"></div>
    </section>
  );
};

export default RecentlyQueried; 