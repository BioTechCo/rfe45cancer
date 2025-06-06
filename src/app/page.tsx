import fs from "fs";
import path from "path";
import PostList from "@/app/components/PostList";
import { ListPost } from "@/types";

import "@/app/utils.css";

export default async function Home() {
  const postsDirectory = path.join(process.cwd(), "src", "posts");
  const filenames = fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".mdx"));

  const posts: ListPost[] = [];

  // Process each post
  for (const filename of filenames) {
    const slug = filename.replace(/\.mdx$/, "");
    try {
      // Import the metadata file from the dedicated metadata directory
      const { default: metadata } = await import(`@/metadata/${slug}`);

      // Skip if missing required fields
      if (!metadata.title || !metadata.date) {
        console.warn(`Missing required metadata in metadata/${slug}.ts`);
        continue;
      }

      posts.push({
        slug,
        title: metadata.title,
        date: metadata.date,
        excerpt: metadata.excerpt || "No excerpt available",
      });
    } catch (error) {
      console.warn(`Error loading metadata for ${slug}:`, error);
    }
  }

  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="" style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="all-title">
          遞迴特徵刪除技術應用於生物標記篩選及癌症精準診斷之研究
        </h1>
      </div>
      <PostList posts={posts} />
    </div>
  );
}
