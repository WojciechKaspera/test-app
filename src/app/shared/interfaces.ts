export interface SearchResult {
  title: string;
  id: string;
  description: string;
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  height: number;
  width: number;
  url: string;
}
