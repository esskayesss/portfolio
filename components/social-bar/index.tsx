import Link from "next/link"
import { PiGithubLogo, PiXLogo, PiInstagramLogo, PiDribbbleLogo, PiLinkedinLogo, PiEnvelopeSimple, PiYoutubeLogo } from "react-icons/pi";
import React from "react";

const socials = [
  {
    href: "https://github.com/esskayesss",
    component: <PiGithubLogo key="github" className={`animate hover:text-accent-fg`} />
  },
  {
    href: "https://x.com/esskayesss_",
    component: <PiXLogo key="x" className={`animate hover:text-white`} />
  },
  {
    href: "https://instagram.com/esskayesss_",
    component: <PiInstagramLogo key="instagram" className={`animate hover:text-magenta-fg`} />,
  },
  {
    href: "https://linkedin.com/in/esskayesss",
    component: <PiLinkedinLogo key="linkedin" className={`animate hover:text-blue-500`} />
  },
  {
    href: "https://youtube.com/@esskayesss",
    component: <PiYoutubeLogo key="youtube" className={`animate hover:text-red-600`} />
  },
  {
    href: "mailto:ess@esskayesss.dev",
    component: <PiEnvelopeSimple key="envelope" className={`animate hover:text-dim-fg`} />
  }
]

export const SocialBar: React.FC = () => {
  return (
    <div className="p-4 border border-ghost flex place-content-around text-2xl">
      {socials.map(({href, component}) => (
        <Link href={href} key={href}>
          {component}
        </Link>))}
    </div>
  )
}