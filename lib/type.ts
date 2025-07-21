

export type Product = {
    id: number;
    name: string;
    slug: string;
    image: string;
    description: string;
    category: string;
    product_subcategory_id: number;
};
export type Category = {
    id: number;
    name: string;
    slug: string;
    description: string;
    image: string;
};