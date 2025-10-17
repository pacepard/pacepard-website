"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { BRAND_INFO, 
    SOCIAL_LINKS_DATA, 
    FOOTER_LINKS_DATA, 
    FOOTER_BOTTOM_TEXT  } from "@/_data/pacepard/footer";
import { Logo } from "@/components/pacepard/containers/logo";
import { GitHubIcon, LinkedInIcon, XIcon  } from "@/components/pacepard/containers/social-icons";

// Map the string IDs from the data file to the actual imported icon components
const SOCIAL_ICON_MAP = {
    github: GitHubIcon,
    linkedin: LinkedInIcon,
    x: XIcon,
};

export default function FooterStickyReveal() {
    const currentYear = new Date().getFullYear();
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Track scroll progress within the footer container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    // Transform values based on scroll progress
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.8, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.95, 1]);
    const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 20, 0]);

    // Stagger animations for different sections
    const brandOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 0.5, 1]);
    const linksOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7], [0, 0.5, 1]);
    const bigTextOpacity = useTransform(scrollYProgress, [0.3, 0.6, 0.9], [0, 0.5, 1]);
    const bigTextScale = useTransform(scrollYProgress, [0.3, 0.6, 0.9], [0.5, 0.8, 1]);
    const bottomOpacity = useTransform(scrollYProgress, [0.5, 0.8, 1], [0, 0.5, 1]);

    return (
        <div ref={containerRef} className="relative min-h-screen">
            {/* Sticky container that reveals content as you scroll */}
            <div className="sticky top-0 h-screen flex items-end pb-10 md:pb-20 overflow-hidden">
                <motion.footer 
                    style={{ opacity, scale, y }}
                    className="mx-auto max-w-6xl w-full relative"
                >
                    <div className="px-4 sm:px-6 py-8 sm:py-12 border-t border-neutral-800 pt-6 sm:pt-8">
                        {/* Top Section: Brand + Links */}
                        <div className="flex mt-4 sm:mt-6 flex-col md:flex-row md:flex-wrap lg:flex-row lg:justify-between gap-8 sm:gap-10 lg:gap-24">
                            
                            {/* Brand Section with staggered reveal */}
                            <motion.div 
                                style={{ opacity: brandOpacity }}
                                className="space-y-3 sm:space-y-4"
                            >
                                <div className="flex items-center space-x-2">
                                    <Logo/>
                                </div>
                                
                                {/* Brand Description */}
                                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
                                    {BRAND_INFO.description}
                                </p>

                                {/* Social Links */}
                                <div className="flex space-x-3">
                                    {SOCIAL_LINKS_DATA.map((social, index) => {
                                        const IconComponent = SOCIAL_ICON_MAP[social.id];
                                        if (!IconComponent) return null;

                                        return (
                                            <motion.a
                                                key={social.id}
                                                href={social.href}
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ 
                                                    opacity: 1, 
                                                    scale: 1,
                                                    transition: { 
                                                        delay: index * 0.1,
                                                        type: "spring",
                                                        stiffness: 200
                                                    }
                                                }}
                                                viewport={{ once: true }}
                                                whileHover={{ scale: 1.1 }}
                                                className="w-8 h-8 sm:w-9 sm:h-9 bg-accent dark:bg-accent hover:bg-primary dark:hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                                                aria-label={social.ariaLabel}
                                            >
                                                <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                            </motion.a>
                                        );
                                    })}
                                </div>
                            </motion.div>

                            {/* Footer Link Sections with staggered reveal */}
                            <motion.div 
                                style={{ opacity: linksOpacity }}
                                className="flex flex-col sm:flex-row gap-8 sm:gap-10 lg:gap-24"
                            >
                                {FOOTER_LINKS_DATA.map((section, index) => (
                                    <motion.div 
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ 
                                            opacity: 1, 
                                            x: 0,
                                            transition: { 
                                                delay: index * 0.15,
                                                duration: 0.6
                                            }
                                        }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        className="space-y-3 sm:space-y-4"
                                    >
                                        <h3 className="font-semibold text-sm sm:text-base">{section.title}</h3>
                                        <ul className="space-y-2 sm:space-y-3">
                                            {section.links.map((link, linkIndex) => (
                                                <motion.li 
                                                    key={linkIndex}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ 
                                                        opacity: 1, 
                                                        x: 0,
                                                        transition: { 
                                                            delay: (index * 0.15) + (linkIndex * 0.05),
                                                            duration: 0.4
                                                        }
                                                    }}
                                                    viewport={{ once: true }}
                                                >
                                                    <a
                                                        href={link.href}
                                                        target={link.external ? "_blank" : "_self"}
                                                        rel={link.external ? "noopener noreferrer" : undefined}
                                                        className="text-xs sm:text-sm text-neutral-400 hover:text-primary transition-colors inline-block"
                                                    >
                                                        {link.label}
                                                    </a>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Large Brand Text with dramatic reveal */}
                        <motion.div 
                            style={{ opacity: bigTextOpacity, scale: bigTextScale }}
                            className="mt-12 sm:mt-16 flex justify-center overflow-hidden"
                        >
                            <span className="text-[3rem] sm:text-[5.5rem] md:text-[8rem] lg:text-[12rem] xl:text-[16.6rem] font-bold select-none leading-none bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 text-center">
                                {BRAND_INFO.name}
                            </span>
                        </motion.div>

                        {/* Bottom Copyright with fade in */}
                        <motion.div 
                            style={{ opacity: bottomOpacity }}
                            className="flex flex-col items-start justify-between gap-4 sm:gap-6 sm:flex-row mt-8 sm:mt-10 border-t border-neutral-800 pt-6 sm:pt-8"
                        >
                            <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-1 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200">
                                <p className="text-xs sm:text-sm text-neutral-500">
                                    {FOOTER_BOTTOM_TEXT.madeBy}
                                </p>
                            </div>
                            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-500">
                                &copy; {currentYear}{" "}
                                <a
                                    href={FOOTER_BOTTOM_TEXT.copyrightHref}
                                    className="text-neutral-400 hover:text-primary transition-colors"
                                >
                                    {FOOTER_BOTTOM_TEXT.copyrightName}
                                </a>
                                {FOOTER_BOTTOM_TEXT.rights}
                            </p>
                        </motion.div>
                    </div>
                </motion.footer>
            </div>
        </div>
    );
}
