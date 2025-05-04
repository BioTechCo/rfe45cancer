import Image from 'next/image';

interface ImageGalleryProps {
    images: string[];
    title?: string;
    altPrefix?: string;
    width?: number;
    height?: number;
}

export default function ImageGallery({
    images,
    title = "Images",
    altPrefix = "Statistical image",
    width = 800,
    height = 600
}: ImageGalleryProps) {
    if (images.length === 0) return null;

    return (
        <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            {images.map((image, index) => (
                <div key={index} className="mb-4">
                    <Image
                        src={image}
                        alt={`${altPrefix} ${index + 1}`}
                        width={width}
                        height={height}
                        className="rounded-lg"
                    />
                </div>
            ))}
        </div>
    );
}