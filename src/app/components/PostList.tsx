"use client";

import { ListPost } from "@/types";
import { handleNavigation } from "@/utils/navigation";

import "./PostList.css";

interface PostListProps {
  posts: ListPost[];
}

const getTitleClass = (title: string) => {
  if (title.includes("Breast")) return "title-breast";
  if (title.includes("Lung")) return "title-lung";
  if (title.includes("Prostate")) return "title-prostate";
  if (title.includes("Rectal")) return "title-rectal";
  if (title.includes("Stomach")) return "title-stomach";
  return "title-default";
};

export default function PostList({ posts }: PostListProps) {
  return (
    <div
      className=""
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      {posts.map((post) => {
        const href = `/posts/${post.slug}`;

        return (
          <a
            key={post.slug}
            href={href}
            onClick={(e) => handleNavigation(e, href)}
            className="post-link"
            // style={{
            //   backgroundColor: post.title.includes("Breast")
            //     ? "rgb(255,228,177)"
            //     : post.title.includes("Lung")
            //     ? "rgb(216,232,217)"
            //     : post.title.includes("Prostate")
            //     ? "rgb(220,238,243)"
            //     : post.title.includes("Rectal")
            //     ? "rgb(248,238,204)"
            //     : post.title.includes("Stomach")
            //     ? "rgb(253,228,228)"
            //     : "rgba(255, 255, 255, 0.5)",
            // }}
          >
            <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
              <div style={{ paddingBottom: "10px", paddingTop: "10px" }}>
                <div
                  className={`post-title ${getTitleClass(post.title)}`}
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  {post.title}
                </div>
                <div>{post.excerpt}</div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
