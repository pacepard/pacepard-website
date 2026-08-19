/** next.config.ts */
import createMDX from '@next/mdx';
import type { NextConfig } from 'next';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const mdx = createMDX({
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
});

const nextConfig: NextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    output: 'standalone',
    // Resolve local file:../pacepard-ui (and its deps) from the sibling package tree.
    outputFileTracingRoot: path.join(__dirname, '../'),
    transpilePackages: ['@pacepard/ui'],
    images: { unoptimized: true },
    experimental: {
        mdxRs: false,
    },
    eslint: {
        ignoreDuringBuilds: process.env.NEXT_DISABLE_ESLINT === '1',
    },
    typescript: {
        ignoreBuildErrors: process.env.NEXT_DISABLE_TYPECHECK === '1',
    },
};

export default mdx(nextConfig);
