export const Navigation = [
  {
    label: "#HackOgbomoso",
    href: "/about",
    dropdown: [
      {
        label: "Our Mission",
        href: "/about/mission",
      },
      {
        label: "Our Team",
        href: "/about/team",
      },
      {
        label: "Our History",
        href: "/about/history",
      },
    ],
  },
   {
    label: "Partner with us",
    href: "/faq",
  },
 
];


export const navigationData = {
  links: [
    { id: "home", label: "Home", href: "/" },
    { id: "hackathons", label: "Hackathons", href: "/hackathons" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "leaderboard", label: "Leaderboard", href: "/leaderboard" },
    { id: "resources", label: "Resources", href: "/resources" },
  ],
  actions: {
    loggedOut: [
      {
        id: "login",
        text: "Login",
        href: "#",
        variant: "link",
      },
      {
        id: "register",
        text: "Register",
        href: "#",
        variant: "default",
      },
    ],
    scrolled: [
      {
        id: "host-hackathon",
        text: "Host a Hackathon",
        href: "#",
        variant: "default",
      },
    ],
  },
};
