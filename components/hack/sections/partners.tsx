"use client";

import Image from "next/image";

const partners = [
    { name: "Elab", logo: "/hack-ogbomoso/elab logo.jpeg" },
    { name: "The Assembly", logo: "/hack-ogbomoso/Theassembly logo.jpg" },
    { name: "Brave Redemptive", logo: "/hack-ogbomoso/braveredemptive_logo.jpeg" },
    { name: "Qeola", logo: "/hack-ogbomoso/qeola logo.png" },
    { name: "L'orbe", logo: "/hack-ogbomoso/Lorbe logo.jpeg" },
];

const Partners = () => {
    return (
        <section className="bg-amber-100/50 dark:bg-background pb-16 pt-16 md:pb-32">
            <div className="relative m-auto max-w-6xl px-6">
                {/* Heading */}
                <div className="gap-4 sm:grid sm:grid-cols-2">
                    <div className="sm:w-2/5">
                        <h2 className="text-title text-3xl font-bold sm:text-4xl">
                            Our Partners
                        </h2>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <p>
                            Proud to collaborate with these amazing organizations supporting #HACK2025
                        </p>
                    </div>
                </div>

                {/* Partners Infinite Scroll */}
                <div className="relative mt-12 overflow-hidden">
                    {/* Gradient edges */}
                    <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-20 bg-gradient-to-r from-amber-100/50 dark:from-background to-transparent" />
                    <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-20 bg-gradient-to-l from-amber-100/50 dark:from-background to-transparent" />

                    {/* Scrolling wrapper - duplicated 3 times for seamless loop */}
                    <div className="flex animate-infinite-scroll">
                        {/* Set 1 */}
                        {partners.map((partner, index) => (
                            <div
                                key={`set1-${index}`}
                                className="mx-8 flex flex-shrink-0 flex-col items-center justify-center gap-4 sm:mx-12"
                            >
                                <div className="flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
                                    <Image
                                        src={partner.logo}
                                        alt={`${partner.name} Logo`}
                                        width={96}
                                        height={96}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                                <p className="text-center text-xs font-medium sm:text-sm">
                                    {partner.name}
                                </p>
                            </div>
                        ))}

                        {/* Set 2 - duplicate for seamless loop */}
                        {partners.map((partner, index) => (
                            <div
                                key={`set2-${index}`}
                                className="mx-8 flex flex-shrink-0 flex-col items-center justify-center gap-4 sm:mx-12"
                            >
                                <div className="flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
                                    <Image
                                        src={partner.logo}
                                        alt={`${partner.name} Logo`}
                                        width={96}
                                        height={96}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                                <p className="text-center text-xs font-medium sm:text-sm">
                                    {partner.name}
                                </p>
                            </div>
                        ))}

                        {/* Set 3 - extra duplicate for even smoother transition */}
                        {partners.map((partner, index) => (
                            <div
                                key={`set3-${index}`}
                                className="mx-8 flex flex-shrink-0 flex-col items-center justify-center gap-4 sm:mx-12"
                            >
                                <div className="flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
                                    <Image
                                        src={partner.logo}
                                        alt={`${partner.name} Logo`}
                                        width={96}
                                        height={96}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                                <p className="text-center text-xs font-medium sm:text-sm">
                                    {partner.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes infinite-scroll {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(calc(-100% / 3));
                    }
                }

                .animate-infinite-scroll {
                    animation: infinite-scroll 30s linear infinite;
                    width: max-content;
                }
            `}</style>
        </section>
    );
};

export default Partners;