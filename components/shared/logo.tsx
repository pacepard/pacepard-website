"use client";

import { ILogo } from "@/utils/interfaces";
import { clsx } from "clsx";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const LogoContainer = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return <div className={clsx(className, "h-48 w-48 pr-10")} {...props} />;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
const Logo = (data: ILogo) => {
  const { large, className, ...rest } = data;
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const imageSrc =
    theme === "dark" ? "blocks/damola-dark.svg" : "blocks/damola-dark.svg";

  // Only pass valid div props (filter out any props not valid for div)
  const divProps: React.HTMLAttributes<HTMLDivElement> = {};
  if (rest.id) divProps.id = rest.id;
  if (rest.style) divProps.style = rest.style;
  if (rest.title) divProps.title = rest.title;
  // Add more allowed div props as needed

  return (
    <>
      {" "}
      <div className={clsx(className, "pointer-events-auto")} {...divProps}>
        <Image
          src={imageSrc}
          alt="Damola Oladipo"
          className="w-36"
          width={100}
          height={100}
          priority
        />
      </div>
    </>
  );
};

export {
  Logo,
    LogoContainer   
}