interface PlotGalleryProps {
  plots: string[];
  title?: string;
  width?: string;
  height?: string;
}

export default function PlotGallery({
  plots,
  title = "Interactive Plots",
  width = "50%",
  height = "600px"
}: PlotGalleryProps) {
  if (plots.length === 0) return null;
  
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {plots.map((plot, index) => (
        <div key={index} className="mb-4">
          <iframe
            src={plot}
            width={width}
            height={height}
            className="border-0"
            title={`Plot ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}