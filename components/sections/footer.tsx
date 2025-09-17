import { footerData } from "@/_data/footer";
import { Logo } from "@/components/shared/logo";
import Link from "next/link";

export default function Footer() {
  const { brand, socialLinks, programs, about } = footerData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-transparent">
      <div className="relative mx-auto mt-36 w-full max-w-5xl px-6 py-12 pt-8">
        <div className="mt-10 border-b mb-6">
          <div className="mx-auto flex max-w-5xl flex-wrap items-start justify-between gap-6 pb-6">
            <div className="flex items-start">
              <Link href="/" aria-label="go home" className="block size-fit">
                <Logo />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-muted-foreground hover:text-primary block"
                >
                  <link.icon className="size-6" />
                </Link>
              ))}
            
            </div>
          </div>
        </div>

        <div className="mb-44 md:mb-56 flex flex-col md:flex-row md:flex-wrap lg:flex-row lg:justify-between">
          {/* Brand Section */}
          <div className="space-y-4">
            <p className="text-foregroundblock max-w-sm text-sm leading-relaxed">
              {brand.bio}
            </p>

            {/* Social Links */}
            <div className="text-foreground  block max-w-sm text-sm leading-relaxed">
              <div>
                <p>{brand.address}</p>
                <p>{brand.telephone}</p>
                <p>{brand.email}</p>
              </div>
            </div>
          </div>

          {/* Wrapped the last two sections in a new flex div */}
          <div className="flex flex-col gap-10 md:flex-row lg:gap-24 mt-8 md:mt-0">
            
            <div className="space-y-2 sm:mt-10 md:mt-0">
              <h3 className="font-semibold">{programs.group}</h3>
              <ul className="space-y-3">
                {programs.items.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm  transition-colors hover:text-brand-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            
            <div className="space-y-2">
              <h3 className="font-semibold">{about.group}</h3>
              <ul className="space-y-3">
                {about.items.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-sm transition-colors hover:text-brand-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="md:mt32 mt-10 flex flex-col items-start justify-between gap-6 border-t border-neutral-800 pt-8 sm:flex-row">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-neutral-800 dark:text-neutral-200">
            <p className="text-sm"> {brand.buitBy}</p>
          </div>
          <p className="text-sm">
            &copy; {currentYear}{" "}
            <a
              href="https://github.com/damolaoladipo"
              className="transition-colors hover:text-[#a3f443]"
            >
              {brand.ownedBy}
            </a>
            {brand.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
