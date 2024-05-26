"use client";

import { Fira_Code } from "next/font/google";

import ProjectsCard from "./ProjectsCard";
const fira = Fira_Code({ subsets: ["latin"] });


export default function Projects() {
  
  return (
    <div className="p-10 md:p-32">
      <div className={`${fira.className} text-2xl md:text-5xl font-medium`}>
        {"<Projects/>"}
      </div>
      <div className="flex flex-row flex-wrap justify-center md:justify-between content-start">
        <ProjectsCard
          title="Wordle Unlimited"
          description="A wordle clone written in React, with extra features for user experience."
          imageSrc="/wordle-unlimited.png"
          githubSrc="https://github.com/aidan-ching/wordle-unlimited"
          projectSrc="https://aidan-ching.github.io/wordle-unlimited/"
          liveDemo={true}
        />

        <ProjectsCard
          title="Pathfinding Visualizer"
          description="Website to showcase how different pathfinding algorithms search their way through a maze."
          imageSrc="/pathfinding.png"
          githubSrc="https://github.com/aidan-ching/pathfinding-visualizer"
          projectSrc="https://aidan-ching.github.io/pathfinding-visualizer/"
          liveDemo={true}
        />
        {/* 
        <ProjectsCard
          title="Sudoku Solver"
          description="GUI based Sudoku game, with solving functionality using the backtracking algorithm. Written in Pygame."
          imageSrc="/sudoku.png"
          githubSrc="https://github.com/aidan-ching/Sudoku-solver"
          projectSrc="https://github.com/aidan-ching/Sudoku-solver"
          liveDemo={false}
        /> */}

        <ProjectsCard
          title="Calculator"
          description="Clone of a basic calculator, written in vanilla HTML/CSS and JavaScript."
          imageSrc="/calculator.png"
          githubSrc="https://github.com/aidan-ching/calculator"
          projectSrc="https://aidan-ching.github.io/calculator/"
          liveDemo={true}
        />
      </div>
    </div>
  );
}
