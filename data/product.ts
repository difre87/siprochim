
let endpoint = "https://esjc.org/siprochim/public/api/v1/"


export const fetchCategory = async (category: string) => {
    try {
        const response = await fetch(
            `${endpoint}families/${category}/categories`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        //console.log("Fetched categories:", data);
        return data.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

export const fetchProductByCategories = async (subCategory: string) => {
    try {
        const response = await fetch(
            //`${endpoint}families/products?category=${encodeURIComponent(category)}&familie=${encodeURIComponent(id)}`
            `${endpoint}categories/${subCategory}/subcategories`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
}

export const fetchProductBySlug = async (subcategory: string) => {
    try {
        const response = await fetch(
            `${endpoint}subcategories/${subcategory}/products` // Adjust the endpoint as needed
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching product by ID:", error);
        return null;
    }
}

export const fetchProductById = async (id: string) => {
    try {
        const response = await fetch(
            `${endpoint}products/${id}`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        return data.data;
    } catch (error) {
        console.error("Error fetching product by ID:", error);
        return null;
    }
}

export const fetchCategoryBySlug = async (id: number) => {
    try {
        const response = await fetch(
            `${endpoint}subcategories/${id}` // Adjust the endpoint as needed
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching category by slug:", error);
        return null;
    }
}