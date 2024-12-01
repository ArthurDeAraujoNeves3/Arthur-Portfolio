import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NextJs otimiza o tamanho do pacote carregando apenas os módulos que você está utilizando
  experimental: {
    optimizePackageImports: ["@chakra-ui-react"],
  }
};

export default nextConfig;
