// ─── Auth ─────────────────────────────────────────────────────────────────────

export interface UserCredentials {
  email: string;
  password: string;
}

export type Title = 'Mr' | 'Mrs';

export interface UserRegistration extends UserCredentials {
  name: string;
  title: Title;
  birthDay: number;
  birthMonth: number;
  birthYear: number;
  firstName: string;
  lastName: string;
  company?: string;
  address1: string;
  address2?: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
  newsletter?: boolean;
  specialOffers?: boolean;
}

// ─── Products ─────────────────────────────────────────────────────────────────

export interface Product {
  id: number;
  name: string;
  price: string;
  brand: string;
  category: {
    usertype: { usertype: string };
    category: string;
  };
}

export interface CartItem {
  productId: number;
  name: string;
  price: string;
  quantity: number;
  total: string;
}

// ─── Checkout ─────────────────────────────────────────────────────────────────

export interface CardDetails {
  nameOnCard: string;
  cardNumber: string;
  cvc: string;
  expiryMonth: string;
  expiryYear: string;
}

// ─── API ──────────────────────────────────────────────────────────────────────

export interface ApiResponse<T = unknown> {
  responseCode: number;
  message?: string;
  products?: T;
  brands?: T;
  user?: T;
}

export interface Brand {
  id: number;
  brand: string;
}
