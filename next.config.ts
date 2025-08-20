import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
  // reactStrictMode: false,
  // productionBrowserSourceMaps: false,
  // experimental: {
  //   devtoolNewPanelUI: true,
  //   globalNotFound: true,
  //   optimizeCss: true,
  //   optimizeRouterScrolling: true,
  //   optimizeServerReact: true,
  //   optimizePackageImports: ["*"],
  // },
};

export default nextConfig;
