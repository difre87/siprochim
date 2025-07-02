export const fetchCategory = async (category: string) => {
    try {
        const response = await fetch(
            `http://cluezjj.cluster027.hosting.ovh.net/api/families?category=${encodeURIComponent(category)}`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

export const fetchProductByCategories = async (category: string, id: number) => {
    try {
        const response = await fetch(
            `http://cluezjj.cluster027.hosting.ovh.net/api/families/products?category=${encodeURIComponent(category)}&familie=${encodeURIComponent(id)}`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
}

export const fetchProductById = async (id: number) => {
    try {
        const response = await fetch(
            `http://cluezjj.cluster027.hosting.ovh.net/api/products/${id}` // Adjust the endpoint as needed
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching product by ID:", error);
        return null;
    }
}