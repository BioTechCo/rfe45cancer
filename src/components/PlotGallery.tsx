interface PlotGalleryProps {
  plot: string;
  title?: string;
  width?: string;
  height?: string;
}

export default function PlotGallery({
  plot,
  title = "Interactive Plot",
  width = "50%",
  height = "600px"
}: PlotGalleryProps) {
  if (plot.length === 0) return null;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="mb-4">
        <iframe
          src={plot}
          width={width}
          height={height}
          className="border-0"
          title="Plot"
        />
      </div>
    </div>
  );
}