import NextImage from 'next/image'
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

type Props = {
    src: string,
    alt?: string,
    width: number,
    height: number,
    loading?: "eager" | "lazy",
};

const Image = ({ src, alt, width, height, loading = 'lazy' }: Props) => {
    const subDirectory = publicRuntimeConfig.SUB_DIRECTORY || "";
    return (
        <>
            <NextImage
                src={`${subDirectory}${src}`}
                alt={alt || ''}
                width={width}
                height={height}
                loading={loading}
            />
        </>
    );
};

export default Image;

