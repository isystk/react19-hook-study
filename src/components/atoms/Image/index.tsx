import NextImage from 'next/image'
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

type Props = {
    src: string,
    alt?: string,
    width: number,
    height: number,
    loading?: "eager" | "lazy",
};

const Image = ({ src, alt, width, height, loading = 'lazy' }: Props) => {
    const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || "";
    return (
        <>
            <NextImage
                src={`${basePath}${src}`}
                alt={alt || ''}
                width={width}
                height={height}
                loading={loading}
            />
        </>
    );
};

export default Image;

