import Image from "next/image";

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
      <img
        src={image}
        alt={alt}
        width={width}
        height={height}
        style={{
          width: "full",
          height: "auto",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      />
      <div className="" style={{ textAlign: "center" }}>
        {title}
      </div>
    </div>
  );
}
