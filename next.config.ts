/** next.config.ts */
import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

const mdx = createMDX({
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
});

const nextConfig: NextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    transpilePackages: ['@pacepard/ui'],
    images: { unoptimized: true },
    experimental: {
        mdxRs: false,
    },
};

initOpenNextCloudflareForDev();

export default mdx(nextConfig);
