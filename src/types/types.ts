interface IGeo {
  lat: string | null;
  lng: string | null;
}

interface ICategory {
  id: number;
  name: string;
}

 export interface IProject {
  categories: ICategory[];
  description: string;
  geo: IGeo;
  id: number;
  image: string;
  image_dark: string;
  project_url: string | null;
  slug: string;
  title: string;
}