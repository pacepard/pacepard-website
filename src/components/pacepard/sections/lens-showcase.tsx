import { Mockup } from '@/components/ui/mockup'
import Screenshot from '@/components/ui/screenshot'
import { Cpu, Zap } from 'lucide-react'

export default function LensShowcase() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">

                {/* Layout grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT: Mobile Mockup */}
                    <div className="flex justify-center">
                        <Mockup type="responsive">
                            <Screenshot
                                srcLight="/blocks/step-one.png"
                                srcDark="/blocks/step-one.png"
                                alt="Mobile App"
                                width={275}
                                height={380}
                            />
                        </Mockup>
                    </div>

                    {/* RIGHT: Text Content */}
                    <div className="space-y-10">

                        {/* Heading */}
                        <h2 className="text-4xl font-medium lg:text-5xl max-w-xl leading-tight">
                            The Lyra ecosystem brings together our models.
                        </h2>

                        {/* Text paragraphs */}
                        <div className="space-y-4">
                            <p className="text-muted-foreground">
                                Gemini is evolving to be more than just the models.
                                <span className="font-semibold"> It supports an entire ecosystem</span> from products to platforms that help teams build.
                            </p>
                            <p className="text-muted-foreground">
                                It powers new ideas across tools, APIs, and services that help developers and businesses grow.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-6 pt-4">

                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">Faaast</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    Tools that help you move quicker and innovate.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">Powerful</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    Built to scale for developers and businesses.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
