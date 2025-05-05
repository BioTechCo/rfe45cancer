import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";
import PlotGallery from "@/components/PlotGallery";
import DbetaPie from "@/components/DbetaChart";
import MdxTable from "@/components/MdxTable";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: (props) => <h1 className="text-3xl font-bold mb-4" {...props} />,
    h2: (props) => <h2 className="text-2xl font-semibold mb-3" {...props} />,
    p: (props) => <p className="mb-4" {...props} />,
    img: (props) => (
      <Image
        alt={props.alt || ""}
        width={720}
        height={400}
        className="rounded-md object-cover"
        {...props}
      />
    ),
    // Make these components available in MDX files:
    ImageGallery,
    PlotGallery,
    DbetaPie,
    MdxTable,
    ...components,
  };
}
