'use client'

import { ArrowRight, CirclesThreePlus, ChartBar, DiamondsFour, SquaresFour } from "phosphor-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

type Feature = {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; weight?: "thin" | "light" | "regular" | "bold" | "fill"; className?: string }>;
};

const features: Feature[] = [
  {
    title: "Unlock superhuman potential",
    description: "Grow the skills, habits, and competence that make you job ready.",
    icon: CirclesThreePlus,
  },
  {
    title: "AI-Assisted learning and mastery",
    description: "Solve user and product problems with Pacepard AI by your side.",
    icon: SquaresFour,
  },
  {
    title: "Hackathons that actually converts",
    description: "Organize events that drive engagement, adoption, and lasting loyalty.",
    icon: DiamondsFour, // scale your developer relations
  },
  {
    title: "Scale your learning outcomes",
    description: "Use Pacepard to deliver consistent results that are useful in today’s workplace",
    icon: ChartBar,
  },
];

const HeroSection = () => {
  return (
    <section className="py-28 pt-12 lg:py-24 lg:pt-32">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl xl:whitespace-nowrap">
            Superpowers that grows <br className="hidden lg:block" /> people and products
          </h1>

          <p className="text-muted-foreground text-1xl mt-5 md:text-3xl">
            Learn and grow by doing, earn rewards, and drive long-term adoption and loyalty for organisations.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <a href="https://github.com/pacepard">
                Start learning
              </a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a
                href="/contact"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                Request a Demo
                <ArrowRight size={20} weight="bold" className="inline ml-1" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon size={20} weight="regular" className="text-foreground mt-1 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
