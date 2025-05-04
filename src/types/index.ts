export interface Post {
    slug?: string;
    title: string;
    date: string;
    content: React.ReactNode;
    excerpt?: string;
    images: string[];
    plots: string[];
  }