"use client";

import { useEffect, useState } from "react"

import { Cpu, Zap } from "lucide-react"

import { Mockup } from "@/components/ui/mockup"
import Screenshot from "@/components/ui/screenshot"

export default function LensShowcase() {

    const images = [
        "/blocks/step-one.png",
        "/blocks/step-two.svg",
        "/blocks/step-three.svg"
    ]

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((current) => (current + 1) % images.length)
        }, 1500)

        return () => clearInterval(timer)
    }, [images.length])

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
                                alt="Mobile App"
                                width={275}
                                height={380}
                            />
                        </Mockup>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="space-y-10">

                        <h2 className="text-4xl font-medium lg:text-5xl max-w-xl leading-tight">
                            The Lyra ecosystem brings together our models.
                        </h2>

                        <div className="space-y-4">
                            <p className="text-muted-foreground">
                                Gemini is growing into more than just the models.
                                <span className="font-semibold"> It supports a full ecosystem</span> with tools and platforms that help teams build.
                            </p>
                            <p className="text-muted-foreground">
                                It supports new ideas across tools, apis, and services that help both developers and businesses.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-4">

                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">Fast</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    Helps you build quick and ship ideas.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">Strong</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    Ready for large teams and big ideas.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
