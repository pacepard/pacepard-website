import { siteConfig } from "@/_data/site-config";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[40px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start">
        <Image
          className="dark:invert"
          src="/blocks/pacepard.svg"
          alt="Pacepard logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            We are here to help you learn and grow by{" "}
              <code className="bg-black/[.05] dark:bg-white/[.30] font-mono font-semibold px-2 py-0.5 rounded">
              doing
            </code>
            .
          </li>

          <li className="mb-2 tracking-[-.01em]">
            AI moves fast, We don&#39;t want you to be behind.
            <span className="block px-6">We give you the tools, you do the building!</span>
          </li>
          <li className="mb-2 tracking-[-.01em]">
            Collaborate with software engineers, product managers, 
            <span className="block px-6">product designers, data folks, and other lifelong learners.</span>
          </li>
          <li className="mb-2 tracking-[-.01em]">
            Build Open Source Softwares and AI/ML Products
          </li>
          <li className="mb-2 tracking-[-.01em]">
            Get started by contributing to{" "}
            <code className="bg-black/[.05] dark:bg-white/[.30] font-mono font-semibold px-2 py-0.5 rounded">
              lens
            </code>
            .
          </li>
        </ol>

        <div className="flex gap-4 flex-col sm:flex-row">
          <a
            className="rounded-sm border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href={siteConfig.products.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Start Contributing
          </a>
          <a
            className="rounded-sm border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href={siteConfig.products.docs}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-start ">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Linkedin
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={siteConfig.links.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          X <span className="line-through ">Twitter</span>
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={siteConfig.links.email}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Propose an OSS Product →
        </a>
      </footer>
    </div>
  );
}
