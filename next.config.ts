// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** next.config.ts */
import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const mdx = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: { unoptimized: true },
  experimental: {
    mdxRs: false,
  },
};

export default mdx(nextConfig);
