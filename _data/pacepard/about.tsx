import { ElementType } from 'react';

// Define the structure for a text segment
interface TextSegment {
    text: string;
    as: ElementType; // HTML element type, e.g., 'span'
    animationNum?: number; // Custom index for animation delays
    className?: string; // Tailwind classes for styling
    isHighlighted?: boolean; // Flag to indicate special styling
}

// Structured content for the About Section 2 headline
export const ABOUT_SECTION_HEADLINE: TextSegment[] = [
    {
        text: "We are ",
        as: "span",
        animationNum: 0,
    },
    {
        text: "rethinking",
        as: "span",
        animationNum: 1,
        isHighlighted: true,
        className: "text-blue-600 border-2 border-blue-500 inline-block xl:h-16 border-dotted px-2 rounded-md",
    },
    {
        text: " vehicle charging to be more reliable and always you-first. Our goal is to continually raise the bar and ",
        as: "span",
        animationNum: 0, // Continues main block animation
    },
    {
        text: "challenge",
        as: "span",
        animationNum: 2,
        isHighlighted: true,
        className: "text-orange-600 border-2 border-orange-500 inline-block xl:h-16 border-dotted px-2 rounded-md",
    },
    {
        text: " how things could ",
        as: "span",
        animationNum: 0, // Continues main block animation
    },
    {
        text: "work for you.",
        as: "span",
        animationNum: 3,
        isHighlighted: true,
        className: "text-green-600 border-2 border-green-500 inline-block xl:h-16 border-dotted px-2 rounded-md",
    },
];
