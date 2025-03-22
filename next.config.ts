import type {NextConfig} from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.BASE_PATH;

const nextConfig: NextConfig = {
    /* config options here */
    env: {
        APP_NAME: 'React19 Hook Study',
        APP_DESCRIPTION: 'Reactの学習用サンプルアプリケーションです。NextJS15を利用してReact19の主要なHooksの利用方法を学習します。',
    },
    // GitHub Pages の場合、コンテキストパス（basePath）を設定
    basePath: basePath,
    assetPrefix: basePath,
    publicRuntimeConfig: {
        basePath: basePath,
    },
    output: "export", // Static Export を有効化
    trailingSlash: true, // ファイルパスの末尾に `/` を付ける
};

export default nextConfig;
