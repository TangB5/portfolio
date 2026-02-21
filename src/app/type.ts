// type.ts
export type Motif = {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  origin: string;
  usage: string;
};
export type Category = 'web' | 'mobile' | 'design';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tech: string[];
  category: Category;
  featured: boolean;
  isCompleted: boolean;
  version: string;
}
