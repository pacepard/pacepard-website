export const BRAND_INFO = {
    name: "Pacepard",
    initial: "d",
    initialBgColor: "#a3f443",
    description: "Pacepard is a developer engagement platform built for the next decade of African innovation.",
};

// Data structure for social media links
export const SOCIAL_LINKS_DATA = [
    {
        id: 'x', // Used for mapping to the imported XIcon component
        href: "https://www.x.com/pacepard",
        ariaLabel: "Twitter",
    },
    {
        id: 'linkedin', // Used for mapping to the imported LinkedInIcon component
        href: "https://www.linkedin.com/company/pacepard",
        ariaLabel: "LinkedIn",
    },
    {
        id: 'github', // Used for mapping to the imported GitHubIcon component
        href: "https://github.com/pacepard/",
        ariaLabel: "GitHub",
    },
] as const;

// Data structure for the main footer link columns
export const FOOTER_LINKS_DATA = [
    {
        title: "Product",
        links: [
            {
                label: "Organize your hackathon",
                href: "#",
                external: true, // Flag for target="_blank" and rel="noopener noreferrer"
            },
            {
                label: "Browse Hackathons",
                href: "#",
                external: false,
            },
             {
                label: "Roadmap",
                href: "#",
                external: false,
            },
        ],
    },
    {
        title: "Company",
        links: [
            {
                label: "About us",
                href: "#",
                external: false,
            },
            {
                label: "Changelog",
                href: "#",
                external: false,
            },
            {
                label: "Contact Sales",
                href: "#",
                external: false,
            },
        ],
    },
];

export const FOOTER_BOTTOM_TEXT = {
    madeBy: "Made with ❤️ from Ogbomoso, Nigeria",
    copyrightName: "Pacepard",
    copyrightHref: "https://pacepard.com",
    rights: ". All rights reserved."
};
