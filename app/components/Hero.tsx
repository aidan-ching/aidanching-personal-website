"use client";

import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        {`Hi, I'm Aidan. I am a frontend`}{" "}
        <Highlight>Software Engineer</Highlight>{" "}
        {`located in Southern California.`}
      </motion.h1>
      <div className="w-full relative flex justify-center gap-10 md:justify-around md:gap-0 top-32 md:top-20">
        <Button title="LinkedIn" link="https://www.linkedin.com/in/aidan-ching-ab40371b9/" iconSrc="/icons/linkedin-icon.svg"/>
        <Button title="GitHub" link="https://github.com/aidan-ching" iconSrc="/icons/github-icon.svg"/>
        <Button title="Resume" link="https://drive.google.com/file/d/1oFU2cDfiMNM1r2E__ZWDebhNaxN6pmAG/view?usp=sharing" iconSrc="/icons/document-text.svg"/>
      </div>
    </HeroHighlight>
  );
}

function Button({ title, link, iconSrc }: { title: string, link: string, iconSrc: string }) {
  return (
    <a href={link} target="_blank">
      <button className="border px-6 py-3 font-medium rounded-full bg-slate-300 text-black flex flex-row items-center gap-2">
        <Image src={iconSrc} width={20} height={20} alt={`${title} icon`} />
        
        <div className="hidden sm:block">{title}</div>
      </button>
    </a>
  );
}
