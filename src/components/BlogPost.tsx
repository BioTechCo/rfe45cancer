import { BlogPost as BlogPostType } from '@/types';
import ImageGallery from './ImageGallery';
import PlotGallery from './PlotGallery';

interface BlogPostProps {
  post: BlogPostType;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-6">{post.date}</p>
      <div className="prose max-w-none">{post.content}</div>
      
      {post.volcano_plot && (
        <ImageGallery
          image={post.volcano_plot}
          title="Volcano Plot"
          alt="Volcano Plot"
        />
      )}
      
      {post.plots && post.plots.length > 0 && (
        <PlotGallery plots={post.plots} />
      )}
    </article>
  );
}