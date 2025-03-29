import NextImage from 'next/image'

type Props = {
    src: string,
    alt?: string,
    width: number,
    height: number,
    loading?: "eager" | "lazy",
};

const Image = ({ src, alt, width, height, loading = 'lazy' }: Props) => {
    const subDirectory = process.env.NEXT_PUBLIC_SUB_DIRECTORY || "";
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

