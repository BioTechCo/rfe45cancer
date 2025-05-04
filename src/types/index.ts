import { ReactNode } from 'react';

// Base Post interface with all possible properties
export interface Post {
  slug?: string;
  title: string;
  date: string;
  content?: ReactNode;
  excerpt?: string;
  volcano_plot?: string;
  plots?: string[];
}

export type BlogPost = Omit<Post, 'excerpt'> & { content: ReactNode };
export type PostData = Omit<Post, 'content' | 'excerpt' | 'slug'>;

export interface ListPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}