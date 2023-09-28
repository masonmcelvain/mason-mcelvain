import NextMDX from "@next/mdx";

const withMDX = NextMDX({
   extension: /\.mdx?$/,
   options: {
      remarkPlugins: [],
      rehypePlugins: [],
      providerImportSource: "@mdx-js/react",
   },
});

export default withMDX({
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "lh3.googleusercontent.com",
            port: "",
            pathname:
               "/drive-viewer/AK7aPaCTGHNVVx5V2BRX78sRQjGSkkR49dgQ9vvt_PX7wgB1uHE7DvL-cI5GX1Yc0F7nUsW4Ha9zyY3piegQwbLjGSN_OWi8iw=w1920-h1058",
         },
      ],
   },
   // Append the default value with md extensions
   pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
