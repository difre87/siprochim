

export type Product = {
    analytics: [{
        id: number;
        label: string;
        unit: string;
        value: number;
        product_id: number;
    }];
    length: number;
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

export type ProductFaq = {
    id: number;
    product_id: number;
    title: string;
    content: string | null;
};