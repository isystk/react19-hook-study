import type {NextConfig} from "next";

const isProd = process.env.NODE_ENV === "production";
const subDirectory = process.env.NEXT_PUBLIC_SUB_DIRECTORY || ''; // GitHub Pages の場合、コンテキストパスを設定

const nextConfig: NextConfig = {
    /* config options here */

    env: {
        // Client Side
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
