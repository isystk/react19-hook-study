import type {NextConfig} from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
    /* config options here */
    env: {
        APP_NAME: 'React19 Hook Study',
        APP_DESCRIPTION: 'Reactの学習用サンプルアプリケーションです。NextJS15を利用してReact19の主要なHooksの利用方法を学習します。',
    },
    // GitHub Pages の場合、コンテキストパス（basePath）を設定
    basePath: isProd ? "/react19-hook-study" : "",
    assetPrefix: isProd ? "/react19-hook-study/" : "",
    // Static Export を有効化
    output: "export",
    trailingSlash: true, // ファイルパスの末尾に `/` を付ける
};

export default nextConfig;
