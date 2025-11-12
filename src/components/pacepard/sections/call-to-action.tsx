
import type { Transition } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { ctaData } from "@/_data/pacepard/call-to-action";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Button } from "@/components/ui/button";

const springTransition: Transition = {
  type: "spring",
  bounce: 0.3,
  duration: 1.5,
};

const transitionVariants = {
  item: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
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
    <section className="bg-primary py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 lg:flex lg:items-center lg:justify-between">
        {/* Text Section */}
        <div className="mb-8 lg:mb-0 lg:flex-1">
          <h2 className="text-4xl font-semibold text-accent lg:text-3xl">
            {ctaData.title}
          </h2>
        </div>

        {/* Buttons Section */}
        <div className="flex justify-start gap-4 lg:flex-initial lg:justify-end">
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.75 },
                },
              },
              ...transitionVariants,
            }}
            className="mt-8 flex items-center gap-2"
          >
            {ctaData.buttons.map((btn) => (
              <div
                key={btn.id}
                className="group flex flex-1 rounded-[calc(var(--radius-sm)+0.125rem)]"
              >
                <Button
                  asChild
                  size="lg"
                  variant={btn.variant as "secondary" | "outline"}
                  className="relative flex h-11 flex-1 items-center justify-center overflow-hidden rounded-sm px-5 text-base transition-colors duration-300"
                >
                  <a href={btn.href}>
                    <span className="relative z-10 flex items-center gap-3 text-nowrap transition-all duration-300 group-hover:translate-x-1">
                      {btn.text}
                      <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                    </span>
                    <div className="absolute inset-y-0 left-0 h-full w-full -translate-x-full bg-gradient-to-r from-[var(--color-green)] to-[var(--color-orange)] transition-transform duration-300 group-hover:translate-x-0" />
                  </a>
                </Button>
              </div>
            ))}
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}
