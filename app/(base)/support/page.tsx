import {SupportCard} from "@/components/ui/support-card";
import Image from "next/image";
import {SiGithubsponsors} from "react-icons/si";
import {redirect} from "next/navigation";

import type {Metadata} from "next";
import {PiXLogo} from "react-icons/pi";
import {AmountInputElement, TextInputElement} from "@/components/ui/forms/input";

export const metadata: Metadata = {
  title: "support esskayesss.",
  description: "Support esskayesss by sponsoring him on Github or subscribing on 𝕏.",
  keywords: [
    "Saurabh",  "Saurabh Sharma", "esskayesss", "esskayesss_",
    "SWE", "Portfolio", "Projects", "Technical Blog", "Programming",
  ],
  metadataBase: new URL("https://esskayesss.dev/support"),
};

export default function Support() {
  if(process.env.NODE_ENV === 'production'){
    redirect("https://github.com/sponsors/esskayesss");
  }

  return (
    <main>
      <SupportCard />
      <div className="section">
        <AmountInputElement label={'Amount'} placeholder={"Contribution Amount"} />
        <TextInputElement label={'Message (Optional)'} placeholder={"Coffee for the blog"} />
      </div>
      <div className="section">
        <div className="heading">
          <h1>Other ways to support me</h1>
        </div>
        <div className="card border border-ghost p-4 flex flex-col gap-4">
          <div className="image-container aspect-[5/1] relative -z-10">
            <Image src={'/support.webp'} alt={'support'} fill={true} style={{objectFit: "cover"}} />
          </div>
          <div className="flex justify-between gap-2 *:text-sm items-center">
            <div className="btn">
              <SiGithubsponsors/> <span>Sponsor on Github</span>
            </div>
            <div className="btn">
              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.00002 2C7.00002 3.105 6.10502 4 5.00002 4C3.89502 4 3.00002 3.105 3.00002 2C3.00002 0.895 3.89502 0 5.00002 0C6.10502 0 7.00002 0.895 7.00002 2ZM6.62002 6.285L4.64502 6.575L6.07502 7.965L5.73502 9.925L7.50002 9L9.26503 9.925L8.92502 7.965L10.355 6.575L8.38002 6.285L7.50002 4.5L6.62002 6.285ZM6.39502 4.74C5.95002 4.58 5.46502 4.5 4.95002 4.5C3.77502 4.5 2.76502 4.925 2.02002 5.72C1.28002 6.505 0.840024 7.62 0.705024 8.95L0.650024 9.495H4.94002L5.20002 8.25L3.17502 6.1L5.97002 5.605L6.39502 4.74Z"
                  fill="#060914"/>
              </svg>
              <span className={`flex items-center gap-1`}>Subscribe on <PiXLogo /></span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}