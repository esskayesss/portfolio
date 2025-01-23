import type {Metadata} from "next";
import { projects } from "@/lib/projects";
import { ProjectListEntry } from "@/components/ui/projects";

export const metadata: Metadata = {
  title: "projects | esskayesss.",
  description: "A collection of projects I've worked on.",
  keywords: [
    "Saurabh",  "Saurabh Sharma", "esskayesss", "esskayesss_",
    "SWE", "Portfolio", "Projects", "Technical Blog", "Programming",
  ],
  metadataBase: new URL("https://esskayesss.dev/projects"),
};

export default function ProjectsPage(){
  return (
    <main>
      <h1>Projects</h1>
      <div className="flex flex-col gap-2">
        {projects.map((entry, index) => {
          return <div className="border border-ghost rounded-sm p-4 *:gap-2">
            <ProjectListEntry key={index} {...entry}>
              {entry.description} 
            </ProjectListEntry>
          </div>
        })}
      </div>
    </main>
  )
}
