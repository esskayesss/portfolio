import type {Metadata} from "next";

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
    </main>
  )
}