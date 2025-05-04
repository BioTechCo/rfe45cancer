import Image from 'next/image';

interface ImageGalleryProps {
    image: string;
    title?: string;
    alt?: string;
    width?: number;
    height?: number;
}

export default function ImageGallery({
    image,
    title = "example title",
    alt = "example image",
    width = 800,
    height = 600,
}: ImageGalleryProps) {
    if (image.length === 0) return null;

    return (
        <div className="my-6">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <img
                src={image}
                title={title}
                alt={alt}
                width={width}
                height={height}
                className="max-w-full h-auto"
            />
        </div>
    );
}