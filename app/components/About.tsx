import { Fira_Code } from "next/font/google";
const fira = Fira_Code({ subsets: ["latin"] });


export default function About() {
  
  return (
    <div className="p-10 md:p-32">
      <div className={`${fira.className} text-2xl md:text-5xl font-medium`}>
        {"<About/>"}
          
      </div>
    </div>
  );
}
