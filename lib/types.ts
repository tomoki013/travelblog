export interface Post {
    title: string;
    description: string;
    dates: string[];
    place: string;
    image: string;
    alt: string;
    slug: string;
    type: 'diary' | 'info';
}