import { bids } from "./Bids";
import { Seller } from "./Seller";

export class Product {
    id?: number;
    productId?: number;
    productName?: string; 
    shortDescription?: string; 
    detailedDescription?: string; 
    category?: string; 
    startingPrice?: number;
   // bidEndDate?: Date ;
    seller?: Seller;
    bidDetails?: bids[];
}