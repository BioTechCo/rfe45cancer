"use client";

import dynamic from "next/dynamic";
import { PostData } from "@/types";
import "@/app/utils.css";

interface ClientComponentProps {
  slug: string;
  postData: PostData;
}

export default function ClientComponent({
  slug,
  postData,
}: ClientComponentProps) {
  const MDXContent = dynamic(() => import(`@/posts/${slug}.mdx`));

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="bg-white p-8 rounded-lg shadow-md">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 className="all-title">{postData.title}</h1>
        </div>
        <div className="prose max-w-none">
          <MDXContent />
        </div>
      </article>
    </div>
  );
}
