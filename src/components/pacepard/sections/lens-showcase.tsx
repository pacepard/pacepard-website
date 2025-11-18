"use client";

import { useEffect, useState } from "react";

import { Code, Users, PuzzlePiece, Rocket } from "phosphor-react";

import { Mockup } from "@/components/ui/mockup";
import Screenshot from "@/components/ui/screenshot";

export default function LensShowcase() {
    const images = [
        "/blocks/step-one.png",
        "/blocks/step-two.svg",
        "/blocks/step-three.svg",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((current) => (current + 1) % images.length);
        }, 1500);

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* LEFT: only one image shown at a time */}
                    <div className="flex justify-center">
                        <Mockup type="responsive">
                            <Screenshot
                                srcLight={images[index]}
                                srcDark={images[index]}
                                alt="Lens App"
                                width={275}
                                height={380}
                            />
                        </Mockup>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="space-y-8">
                        <h2 className="text-4xl font-medium lg:text-5xl max-w-xl leading-tight">
                            Become a Superhuman
                        </h2>

                        <p className="text-muted-foreground">
                            We are here to help you <span className="font-semibold">learn and grow by doing</span> without any limits. AI moves fast, and we don't want you to be behind. We give you the tools, you do the building!
                        </p>

                        <p className="text-muted-foreground">
                            Collaborate with software engineers, product managers, product designers, data folks, and other lifelong learners.
                        </p>

                        {/* Feature List with Icons */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Users size={24} weight="fill" className="text-primary" />
                                <span>Collaborate with cross-functional teams</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Code size={24} weight="fill" className="text-primary" />
                                <span>Contribute to open source software</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <PuzzlePiece size={24} weight="fill" className="text-primary" />
                                <span>Build AI/ML products</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Rocket size={24} weight="fill" className="text-primary" />
                                <span>Start contributing by working on Lens</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
