"use client";

import { ListPost } from '@/types';

interface PostListProps {
  posts: ListPost[];
}

export default function PostList({ posts }: PostListProps) {
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    console.log(`Navigating to ${href}`);
    window.location.href = href;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => {
        const href = `/posts/${post.slug}`;
        console.log(`Rendering post with slug: ${post.slug}, href: ${href}`);

        return (
          <div key={post.slug} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex gap-4">
              <a
                href={href}
                onClick={(e) => handleNavigation(e, href)}
                className="text-blue-600"
              >
                Read More
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}