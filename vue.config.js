module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title: "人工智能创新精英联盟"
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/ai-iel.org/" : "/"
};
