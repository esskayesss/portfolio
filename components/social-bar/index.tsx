import Link from "next/link"
import { PiGithubLogo, PiXLogo, PiInstagramLogo, PiLinkedinLogo, PiEnvelopeSimple, PiYoutubeLogo } from "react-icons/pi";
import React from "react";

const socials = [
  {
    href: "https://github.com/esskayesss",
    label: "GitHub",
    component: <PiGithubLogo key="github" className={`animate hover:text-accent-fg`} />
  },
  {
    href: "https://x.com/esskayesss_",
    label: "x dot com",
    component: <PiXLogo key="x" className={`animate hover:text-white`} />
  },
  {
    href: "https://instagram.com/esskayesss_",
    label: "Instagram",
    component: <PiInstagramLogo key="instagram" className={`animate hover:text-magenta-fg`} />,
  },
  {
    href: "https://linkedin.com/in/esskayesss",
    label: "LinkedIn",
    component: <PiLinkedinLogo key="linkedin" className={`animate hover:text-blue-500`} />
  },
  {
    href: "https://youtube.com/@esskayesss",
    label: "YouTube",
    component: <PiYoutubeLogo key="youtube" className={`animate hover:text-red-600`} />
  },
  {
    href: "mailto:ess@esskayesss.dev",
    label: "Email",
    component: <PiEnvelopeSimple key="envelope" className={`animate hover:text-dim-fg`} />
  }
]

export const SocialBar: React.FC = () => {
  return (
    <div className="p-4 border border-ghost flex place-content-around text-2xl">
      {socials.map(({href, label, component}) => (
        <Link href={href} aria-label={label} key={href}>
          {component}
        </Link>))}
    </div>
  )
}