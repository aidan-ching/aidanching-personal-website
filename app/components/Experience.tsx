import { Fira_Code } from "next/font/google";
const fira = Fira_Code({ subsets: ["latin"] });
import { Separator } from "@/components/ui/separator";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export interface ExperienceEntry {
  company: string;
  title: string;
  description: string;
  date: string;
}

export const TotalExperience: ExperienceEntry[] = [
  {
    company: "Chups",
    title: "Distribution & Packing",
    description: `- Helped with packing food items in a kitchen environment for customers.
                - Handled the distribution and customer service.
                - Practiced valuable interpersonal skills in the food service industry.`,
    date: "July 2021 - September 2021",
  },
  {
    company: "Luminous Window Cleaning",
    title: "Sales & Cleaning",
    description: `- Talked to potential customers to secure sales and ensure quality; helping with customer retention.
            - Improved efficiency by reducing cleaning time by 30%, by collaborating and planning with co-workers.
            - Gained skills in collaboration and communication.`,
    date: "June 2023 - January 2024",
  },
  {
    company: "EESA AI",
    title: "Software Engineering Intern",
    description: `- Worked for a startup company under Berkeley Skydeck incubator program (<3.5% acceptance)
        - Utilized Next.js to build the frontend for EESA's minimum viable product.
        - Helped build EESA Lite, a trial version that would serve to bring in potential customers`,
    date: "April 2024 - Present",
  },
];

export default function Experience() {
  return (
    <div className="p-10 md:p-32">
      <div
        className={`${fira.className} antialiased text-2xl md:text-5xl font-medium`}
      >
        {"<Experience/>"}
      </div>

      <div className="flex justify-center mt-10">
        <ScrollArea className="md:w-2/3 whitespace-nowrap rounded-md">
          <div className="flex w-max space-x-4 p-4">
            {TotalExperience.map((exp, i) => (
              <div key={i}>
                <Card className="w-[300px] h-[430px] flex flex-col">
                  <CardHeader>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>{exp.company}</CardDescription>
                  </CardHeader>
                  <CardContent className="grow">
                    <p className="whitespace-pre-line text-base">
                      {exp.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2">
                    <Separator />
                    <p className="text-sm font-light">{exp.date}</p>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
