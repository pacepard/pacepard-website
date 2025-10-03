import { heroData } from "@/_data/pacepard/hero-section";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { AnimatedGroup } from "@/components/ui/animated-group";


import type { Transition } from "framer-motion";

const springTransition: Transition = {
  type: "spring",
  bounce: 0.3,
  duration: 1.5,
};

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: springTransition,
    },
  },
};

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-b py-32 from-primary to-primary dark:from-primary-950 dark:to-background overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 lg:flex lg:items-center lg:justify-between">
        
        {/* Title/Text Section */}
        <div className="mb-8 lg:mb-0 lg:flex-1">
          <h2 className="text-balance text-4xl font-semibold text-title lg:text-3xl">
            Start Building
          </h2>
        </div>

        {/* Buttons/Action Section */}
        <div className="flex justify-start gap-4 lg:flex-initial lg:justify-end">
                        <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-8 flex items-center gap-2"
                >
                  <div
                    key={heroData.button1.id}
                    className="group flex flex-1 rounded-[calc(var(--radius-sm)+0.125rem)]"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="relative flex h-11 flex-1 items-center justify-center overflow-hidden rounded-sm px-5 text-base transition-colors duration-300 hover:text-white"
                    >
                      <a href={heroData.button1.href}>
                        <span className="relative z-10 flex items-center gap-3 text-nowrap transition-all duration-300 group-hover:translate-x-1">
                          {heroData.button1.text}

                          <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                        </span>

                        <div className="absolute inset-y-0 left-0 h-full w-full -translate-x-full transition-transform duration-300 group-hover:translate-x-0  bg-gradient-to-r from-[var(--color-green)] to-[var(--color-orange)]"></div>
                      </a>
                    </Button>
                  </div>

                  <div className="group flex flex-1 rounded-[calc(var(--radius-sm)+0.125rem)]">
                    <Button
                      key={heroData.button1.id}
                      asChild
                      size="lg"
                      variant="outline"
                      className="bg-background relative flex h-11 flex-1 items-center justify-center overflow-hidden rounded-sm px-5 text-base transition-colors duration-300 hover:text-white"
                    >
                      <a href={heroData.button1.href}>
                        <span className="relative z-10 flex items-center gap-3 text-nowrap transition-all duration-300 group-hover:translate-x-1">
                          {heroData.button2.text}

                          <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                        </span>

                        <div className="absolute inset-y-0 left-0 h-full w-full -translate-x-full transition-transform duration-300 group-hover:translate-x-0  bg-gradient-to-r from-[var(--color-green)] to-[var(--color-orange)]"></div>
                      </a>
                    </Button>
                  </div>
                </AnimatedGroup>
        </div>

      </div>
    </section>
  );
}