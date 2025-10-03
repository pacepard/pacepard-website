
import { AboutUsData } from "@/_data/hack/about-us";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { ArrowUpRight } from "lucide-react";


export default function AboutUs() {
  return (
    <section className="bg-white py-16 pt-20 md:py-32 dark:bg-[#171717]">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <img
          className="rounded-(--radius) grayscale"
          src={AboutUsData.image.src}
          alt={AboutUsData.image.alt}
          height={AboutUsData.image.height}
          width={AboutUsData.image.width}
          loading="lazy"
        />

        {/* This is the main flex container for the heading and subheading */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start md:gap-x-12">
          {/* Heading Section */}
          <div className="flex-1 items-start">
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="mt-6 max-w-2xl text-4xl md:text-5xl font-medium text-left"
            >
              {AboutUsData.heading}
            </TextEffect>
          </div>

          {/* Subheading and Button Section */}
          <div className="flex-1 flex flex-col space-y-6">
            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.5}
              as="p"
              className="mt-8 max-w-2xl text-lg text-pretty text-left"
            >
              {AboutUsData.subheading}
            </TextEffect>

            <div className="flex flex-1">
              <div className="group rounded-[calc(var(--radius-sm)+0.125rem)]">
                <Button
                  asChild
                  size="lg"
                  variant={AboutUsData.button.variant}
                  className="relative flex h-11 flex-1 items-center justify-center overflow-hidden rounded-sm px-5 text-base transition-colors duration-300 hover:text-white"
                >
                  <a href={AboutUsData.button.href}>
                    <span className="relative z-10 flex items-center gap-3 text-nowrap transition-all duration-300 group-hover:translate-x-1">
                      {AboutUsData.button.text}
                      <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                    </span>
                    <div
                      className="absolute inset-y-0 left-0 h-full w-full -translate-x-full transition-transform duration-300 group-hover:translate-x-0  bg-gradient-to-r from-[var(--color-green)] to-[var(--color-orange)]"
                    ></div>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}