export interface IProduct {
    id: number;
    name: string;
    category: string;
    price: number;
    inStock: boolean;
    imageUrl?:string;
}