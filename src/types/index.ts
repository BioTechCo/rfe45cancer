import { ReactNode } from 'react';

// Base Post interface with all possible properties
export interface Post {
  slug?: string;
  title: string;
  date: string;
  content?: ReactNode;
  excerpt?: string;
  volcano_plot?: string;
  pca1?: string;
  pca2?: string;
  joined_dbeta?:string;
  hc_ss?:string;
  hc_ws?:string;
  hc_cs?:string;
  hc_comp?:string;
  voting?:string;
  voting_avg?:string;
}

export type BlogPost = Omit<Post, 'excerpt'> & { content: ReactNode };
export type PostData = Omit<Post, 'content' | 'slug'> & { excerpt?: string };

export interface ListPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}
