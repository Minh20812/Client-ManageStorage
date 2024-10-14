export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://manage-storage.onrender.com"
    : "";

export const USERS_URL = `${BASE_URL}/api/users`;
export const SUPPLIERS_URL = `${BASE_URL}/api/suppliers`;
export const INVENTORY_URL = `${BASE_URL}/api/inventory`;
