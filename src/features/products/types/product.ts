export type Product = {
    id: string;
    name: string;
    price: number;
    category: string;
};

export type ProductId = Product["id"]

// this is product card types