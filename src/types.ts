export type ProjectCategory = 'web';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  highlighted?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Name of Lucide icon
  handle: string;
}

export interface Section {
  id: string;
  title: string;
}
