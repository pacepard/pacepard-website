import { BRAND_INFO, 
    SOCIAL_LINKS_DATA, 
    FOOTER_LINKS_DATA, 
    FOOTER_BOTTOM_TEXT  } from "@/_data/pacepard/footer";
import { GitHubIcon, LinkedInIcon, XIcon  } from "@/components/pacepard/containers/social-icons";

// Map the string IDs from the data file to the actual imported icon components
const SOCIAL_ICON_MAP = {
    github: GitHubIcon,
    linkedin: LinkedInIcon,
    x: XIcon,
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mx-auto max-w-6xl w-full relative ">
            <div className="px-6 py-12 border-t border-neutral-800 mt-36 pt-8">
                <div className="flex mt-6 flex-col md:flex-row md:flex-wrap lg:flex-row lg:justify-between gap-10 lg:gap-24">
                    
                    {/* Brand Section (Uses BRAND_INFO) */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            {/* Brand Initial */}
                            <div 
                                className="w-8 h-8 rounded-lg flex items-center justify-center"
                                style={{ backgroundColor: BRAND_INFO.initialBgColor }}
                            >
                                <span className="text-neutral-900 font-medium text-lg">{BRAND_INFO.initial}</span>
                            </div>
                            <span className="text-xl font-semibold text-white">{BRAND_INFO.name}</span>
                        </div>
                        
                        {/* Brand Description */}
                        <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
                            {BRAND_INFO.description}
                        </p>

                        {/* Social Links (Uses SOCIAL_LINKS_DATA) */}
                        <div className="flex space-x-3">
                            {SOCIAL_LINKS_DATA.map((social) => {
                                const IconComponent = SOCIAL_ICON_MAP[social.id];
                                if (!IconComponent) return null; // Safety check

                                return (
                                    <a
                                        key={social.id}
                                        href={social.href}
                                        className="w-9 h-9 bg-neutral-800 dark:bg-neutral-500 hover:bg-[#a3f443] dark:hover:bg-[#a3f443] rounded-lg flex items-center justify-center transition-colors"
                                        aria-label={social.ariaLabel}
                                    >
                                        <IconComponent className="w-4 h-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Footer Link Sections (Uses FOOTER_LINKS_DATA) */}
                    <div className="flex flex-col md:flex-row gap-10 lg:gap-24">
                        {FOOTER_LINKS_DATA.map((section, index) => (
                            <div key={index} className="space-y-4">
                                <h3 className="text-white font-semibold">{section.title}</h3>
                                <ul className="space-y-3">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a
                                                href={link.href}
                                                target={link.external ? "_blank" : "_self"}
                                                rel={link.external ? "noopener noreferrer" : undefined}
                                                className="text-sm text-neutral-400 hover:text-[#a3f443] transition-colors"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pacepard Text */}
                <div className="mt-16 flex justify-center ">
                    <span className="text-[6.2rem] md:text-[12rem] lg:text-[18.5rem] font-bold select-none leading-none bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">
                        {BRAND_INFO.name}
                    </span>
                </div>

                {/* Bottom Copyright and Attribution */}
                <div className="flex flex-col items-start justify-between gap-6 sm:flex-row mt-10 md:mt32 border-t border-neutral-800 pt-8">
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-neutral-800 dark:text-neutral-200">
                        <p className="text-sm text-neutral-500">
                            {FOOTER_BOTTOM_TEXT.madeBy}
                        </p>
                    </div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">
                        &copy; {currentYear}{" "}
                        <a
                            href={FOOTER_BOTTOM_TEXT.copyrightHref}
                            className=" text-neutral-400 hover:text-[#a3f443] transition-colors"
                        >
                            {FOOTER_BOTTOM_TEXT.copyrightName}
                        </a>
                        {FOOTER_BOTTOM_TEXT.rights}
                    </p>
                </div>
            </div>
        </footer>
    );
}
