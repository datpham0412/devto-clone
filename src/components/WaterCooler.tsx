import Link from "next/link";

interface WaterCoolerItem {
  id: number;
  title: string;
  href: string;
  comments: number;
}

const waterCoolerItems: WaterCoolerItem[] = [
  {
    id: 1,
    title: "3D Printing a Custom Device Case",
    href: "https://dev.to/jeikabu/3d-printing-a-custom-device-case-2ngi",
    comments: 1
  },
  {
    id: 2,
    title: "Games Every Programmer Should Play",
    href: "https://dev.to/abdurrehmaan/games-every-programmer-should-play-301g",
    comments: 12
  },
  {
    id: 3,
    title: "Meme Monday",
    href: "https://dev.to/ben/meme-monday-1kmm",
    comments: 40
  },
  {
    id: 4,
    title: "How Do You Stay Fit As A Busy Tech Professional?",
    href: "https://dev.to/chukwuma1976/how-do-you-stay-fit-as-a-busy-tech-professional-345a",
    comments: 8
  },
  {
    id: 5,
    title: "Meme Monday",
    href: "https://dev.to/ben/meme-monday-26jm",
    comments: 56
  }
];

const WaterCooler = () => {
  return (
    <section className="rounded-lg bg-white p-4 shadow-sm mb-4">
      <header className="mb-4">
        <h3 className="text-lg font-medium">
          <Link href="/t/watercooler" className="text-[#404040] hover:text-[#2F3AB2]/80 text-[20px] font-bold">
            #watercooler
          </Link>
        </h3>
        <div className="text-xs text-[#575757] font-light">
          Light, and off-topic conversation.
        </div>
      </header>
      <div className="h-px bg-gray-200 mx-[-1rem] my-2"></div>
      <div className="flex flex-col gap-4">
        {waterCoolerItems.map((item, index) => (
          <>
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col gap-1 text-gray-900 hover:text-blue-800"
            >
              <span className="mb-2 pt-1 text-base text-gray-600 font-normal hover:text-[#2F3AB2]">{item.title}</span>
              <div className="pt-1 text-[14px] text-[#575757] font-normal">
                {item.comments} comment{item.comments !== 1 ? 's' : ''}
              </div>
            </Link>
            {index !== waterCoolerItems.length - 1 && <div className="h-px bg-gray-200 mx-[-1rem]"></div>}
          </>
        ))}
      </div>
    </section>
  );
};

export default WaterCooler; 