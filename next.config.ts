import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    env: {
        APP_NAME: 'React Study',
        APP_DESCRIPTION: 'Reactの学習用サンプルアプリケーションです。NextJS15を利用してReact19の主要なHooksの利用方法を学習します。',
    },
    output: "export",
};

export default nextConfig;
