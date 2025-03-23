import type {NextConfig} from "next";

const isProd = process.env.NODE_ENV === "production";
const subDirectory = process.env.SUB_DIRECTORY || '';

const nextConfig: NextConfig = {
    /* config options here */
    env: {
        APP_NAME: 'React19 Hook Study',
        APP_DESCRIPTION: 'Reactの学習用サンプルアプリケーションです。NextJS15を利用してReact19の主要なHooksの利用方法を学習します。',
        SUB_DIRECTORY: subDirectory,
    },
    // GitHub Pages の場合、コンテキストパスを設定
    basePath: subDirectory,
    assetPrefix: subDirectory,
    publicRuntimeConfig: {
        basePath: subDirectory,
    },
    output: "export", // Static Export を有効化
    trailingSlash: true, // ファイルパスの末尾に `/` を付ける
};

export default nextConfig;
