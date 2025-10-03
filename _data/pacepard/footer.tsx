export const BRAND_INFO = {
    name: "Pacepard",
    initial: "d",
    initialBgColor: "#a3f443",
    description: "Damola is product and design engineer from Nigeria. I design and build beautiful, intuitive, and responsive web and mobile applications. Let’s work together.",
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
        title: "Madebydamola",
        links: [
            {
                label: "View my resume",
                href: "./damola-resume.pdf",
                external: true, // Flag for target="_blank" and rel="noopener noreferrer"
            },
            {
                label: "My playground",
                href: "#playground",
                external: false,
            },
            {
                label: "My studio",
                href: "#playground",
                external: false,
            },
        ],
    },
    {
        title: "Coming soon!",
        links: [
            {
                label: "Articles",
                href: "#",
                external: false,
            },
            {
                label: "Online classes",
                href: "#",
                external: false,
            },
            {
                label: "Speaking",
                href: "#",
                external: false,
            },
            {
                label: "Newsletter",
                href: "#",
                external: false,
            },
        ],
    },
];

export const FOOTER_BOTTOM_TEXT = {
    madeBy: "Made with ❤️ from Ogbomoso, Nigeria",
    copyrightName: "Pacepard",
    copyrightHref: "https://github.com/pacepard",
    rights: ". All rights reserved."
};
