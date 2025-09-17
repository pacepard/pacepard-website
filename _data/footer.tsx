import { InstagramIcon, LinkedInIcon, XIcon, YouTubeIcon } from "@/components/shared/social-icons";

export const footerData = {
  brand: {
    name: "Lagos Innovates",
    bio: "Lagos Innovates is an initiative of the Lagos State Employment Trust Fund (LSETF).",
    address: "Address: 16 Billings Way, Oregun, Ikeja Lagos, Nigeria",
    telephone: "Telephone: +234 (0) 1 700 0945",
    email: "Email: lagosinnovates@lsetf.ng",
    buitBy: "Made with ❤️ by Damola",
    copyright: ". All rights reserved.",
    ownedBy: "Lagos Innovates",
  },
  socialLinks: [
    {
      href: "https://www.instagram.com/lagosinnovates",
      label: "Instagram",
      icon: InstagramIcon,
    },
    {
      href: "https://www.youtube.com/lsetf",
      label: "YouTube",
      icon: YouTubeIcon,
    },
    {
      href: "https://www.linkedin.com/company/lagos-innovates",
      label: "LinkedIn",
      icon: LinkedInIcon,
    },
    {
      href: "https://x.com/lagosinnovates",
      label: "X",
      icon: XIcon,
    },
  ],
    programs: {
    group: "Programs",
    items: [
      { href: "/programs#workspace-voucher", label: "Workspace Vouchers" },
      { href: "/programs#talent-development", label: "Talent Development" },
      { href: "/programs#grant-for-innovators", label: "Grant for Innovators" },
    ],
  },
  about: {
    group: "About",
    items: [
      { href: "/about-us", label: "About Us" },
      { href: "/press", label: "Press" },
      { href: "/contact", label: "Contact" },
    ],
  }
    
};