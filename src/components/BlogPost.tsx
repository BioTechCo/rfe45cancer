import { Post } from '@/types';
import ImageGallery from './ImageGallery';
import PlotGallery from './PlotGallery';

interface BlogPostProps {
  post: Post;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose max-w-none">{post.content}</div>
      
      <ImageGallery images={post.tcga_volcano_plot} />
      <PlotGallery plots={post.first_pca} />
    </article>
  );
}