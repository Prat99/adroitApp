export interface Geo {
    lat: number;
    lng: number;
}
export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: Geo;
}

export interface Users {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}