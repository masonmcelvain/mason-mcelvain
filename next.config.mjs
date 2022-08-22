import NextMDX from '@next/mdx';

const withMDX = NextMDX({
   extension: /\.mdx?$/,
   options: {
      remarkPlugins: [],
      rehypePlugins: [],
      // If you use `MDXProvider`, uncomment the following line.
      // providerImportSource: "@mdx-js/react",
   },
});

export default withMDX({
   // Append the default value with md extensions
   pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});
