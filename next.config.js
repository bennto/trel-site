const webpack = require("webpack");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  env: {
    directusUrl: "https://trel-directus.up.railway.app/",
    directusToken: "Act6ZLM442JZjF-24GM-Vgo2rcqEAn9I",
    directusUser: "texasrocketengineeringlab@gmail.com",
    directusPass: "d1r3ctu5",
  },
};

module.exports = nextConfig;
