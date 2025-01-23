export interface Post {
  id: number;
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  created_at: {
    en: string;
    es: string;
  };
  author: string;
  img: string;
}