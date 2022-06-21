export interface Details{
    prodcutId : number;
    productName: string;
    quantity: number;
}

export interface Order {
    name: string;
    shippingAdress : string;
    city : string;
    date : string;
    pickup: boolean;
    id: number;
}

export interface DetailsOrder{
    details: Details[];
    orderId : number;
    
}