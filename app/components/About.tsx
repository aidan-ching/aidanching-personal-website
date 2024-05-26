import { Fira_Code } from "next/font/google";
const fira = Fira_Code({ subsets: ["latin"] });
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import TechStackItem from "./TechStackItem";

export default function About() {
  const techStackItems = [
    {
      src: "/tech-stack/javascript.svg",
      label: "Javascript",
    },
    {
      src: "/tech-stack/typescript-icon.svg",
      label: "Typescript",
    },
    {
      src: "/tech-stack/nextjs-icon.svg",
      label: "Next.js",
    },
    {
      src: "/tech-stack/react.svg",
      label: "React",
    },
    {
      src: "/tech-stack/tailwindcss-icon.svg",
      label: "Tailwind",
    },
    {
      src: "/tech-stack/html-5.svg",
      label: "HTML",
    },
    {
      src: "/tech-stack/css-3.svg",
      label: "CSS",
    },
    {
      src: "/tech-stack/git-icon.svg",
      label: "Git",
    },
    {
      src: "/tech-stack/nodejs-icon.svg",
      label: "Node.js",
    },
    {
      src: "/tech-stack/python.svg",
      label: "Python",
    },
    {
      src: "/tech-stack/c-plusplus.svg",
      label: "C++",
    },
    {
      src: "/tech-stack/swift.svg",
      label: "Swift",
    },
    {
      src: "/tech-stack/linux-tux.svg",
      label: "Linux",
    },
    {
      src: "/tech-stack/docker-icon.svg",
      label: "Docker",
    },
  ];

  return (
    <div className="p-10 md:p-32">
      <div
        className={`${fira.className} antialiased text-2xl md:text-5xl font-medium`}
      >
        {"<About/>"}
        <BentoGrid className="max-w-5xl mx-auto my-5">
          <BentoGridItem
            header={
              <Image
                src="/aidan.jpg"
                width={400}
                height={400}
                alt="image of aidan"
                className="h-[70%] w-auto rounded-lg hover:border border-spacing-5"
              />
            }
            title="Aidan Ching"
            description="is a software engineer studying computer science. He specializes in frontend web development, creating beautiful and interactive websites that are accessible to all."
            className="md:col-span-1 md:row-span-2"
          />
          <BentoGridItem
            header={
              <div className="flex justify-center items-center h-full font-semibold text-9xl hover:text-blue-400 transition-colors select-none">
                香港
              </div>
            }
            description="I am from Hong Kong, and I can speak Cantonese, Mandarin, and English!"
          />
          <BentoGridItem
            header={
              <div className="flex justify-around h-full items-center">
                <Image
                  src="/shuttlecock.png"
                  width={100}
                  height={100}
                  alt="shuttlecock icon"
                />
                <Image
                  src="/frisbee.png"
                  width={100}
                  height={100}
                  alt="frisbee icon"
                />
              </div>
            }
            description="I enjoy playing Badminton and Ultimate Frisbee in my spare time."
          />
          <BentoGridItem
            header={
                <div className="h-full flex flex-col items-center justify-around">
                  <Image src="/ucr.svg" width={400} height={20} alt="UCR logo" />
                  <div className="text-lg flex">B.S in Computer Science</div>
                </div>
            }
            className="md:col-span-2"
          />

          <BentoGridItem
            header={
              <div className="flex flex-wrap justify-around items-end content-end gap-14 mx-10">
                {techStackItems.map((item, i) => (
                  <TechStackItem src={item.src} label={item.label} key={i} />
                ))}
              </div>
            }
            className="md:col-span-3"
          />
        </BentoGrid>
      </div>
    </div>
  );
}
