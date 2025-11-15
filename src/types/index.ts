export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface Card {
  id: string;
  colSpan: string;
  rowSpan: string;
  gradient: number;
}