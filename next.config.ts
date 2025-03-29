import type {NextConfig} from "next";

const isProd = process.env.NODE_ENV === "production";
const subDirectory = process.env.SUB_DIRECTORY || ''; // GitHub Pages の場合、コンテキストパスを設定

const nextConfig: NextConfig = {
    /* config options here */

    env: {
        // Client Side
        NEXT_PUBLIC_APP_NAME: 'React19 Hook Study',
        NEXT_PUBLIC_APP_DESCRIPTION: 'Reactの学習用サンプルアプリケーションです。NextJS15を利用してReact19の主要なHooksの利用方法を学習します。',
        NEXT_PUBLIC_SUB_DIRECTORY: subDirectory,
        // Server Side
        API_SERVER: process.env.API_SERVER || 'http://localhost:3000',
    },
    basePath: subDirectory,
    assetPrefix: subDirectory,
    publicRuntimeConfig: {
        // 静的エクスポートではサーバーサイドで動的に設定されるため、クライアントサイドで参照NGとなる為定義しない
    },
    output: "export", // Static Export を有効化
    images: {
        unoptimized: true, // 静的エクスポートを利用するため next/image の最適化機能を無効にする
    },
    trailingSlash: true, // ファイルパスの末尾に `/` を付ける
};

export default nextConfig;
