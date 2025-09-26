

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
    created_at: string;
    updated_at: string;
};

export type Post = {
    id: number;
    title: string;
    slug: string;
    content: string;
    image: string | null;
    user_id: number;
    created_at: string;
    updated_at: string;
    author?: {
        id: number;
        name: string;
        email: string;
    };
};