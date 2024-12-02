import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Search Blog | esskayesss.",
  description: "Search for articles on esskayesss.dev.",
  keywords: [
    "Saurabh",  "Saurabh Sharma", "esskayesss", "esskayesss_",
    "SWE", "Portfolio", "Projects", "Technical Blog", "Programming",
  ],
  metadataBase: new URL("https://esskayesss.dev/projects"),
};

export default function ProjectsPage(){
  return (
    <main>
      <h1>Search Page</h1>
    </main>
  )
}