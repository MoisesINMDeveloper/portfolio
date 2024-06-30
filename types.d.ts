interface ImageItem {
  src: string;
}

interface ImagePortProps {
  images: ImageItem[];
  alt: string;
}

___________________________;
interface Skill {
  name: string;
}

interface ImageItem {
  src: string;
}

interface ParagraphComponentProps {
  title?: string;
  paragraph: string;
  src: ImageItem[];
  alt: string;
  skills: Skill[];
  url?: string;
}

___________________________;
interface Skill {
  name: string;
}

___________________________;
interface ImageItem {
  src: string;
}

interface ParagraphItem {
  title: string;
  image: ImageItem[]; // Ajusta el tipo de 'image' para que sea un array de objetos { src: string }
  alt: string;
  paragraph: string;
  url: string;
  skills: { name: string }[];
}
