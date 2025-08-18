// src/services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api", // update for production
});

// =====================
// Teas
// =====================
export const getTeas = () => API.get("/teas");
export const getTeaById = (id) => API.get(`/teas/${id}`);
export const filterTeas = (params) => API.get("/teas/filter", { params });
export const createTea = (data) => API.post("/teas", data); // admin only
export const updateTea = (id, data) => API.put(`/teas/${id}`, data); // admin only
export const deleteTea = (id) => API.delete(`/teas/${id}`); // admin only

// =====================
// Cart
// =====================
export const getCart = () => API.get("/cart");
export const addToCart = (data) => API.post("/cart/add", data);
export const removeFromCart = (data) => API.post("/cart/remove", data);
export const updateCartQuantity = (data) => API.post("/cart/update", data);

// =====================
// Orders
// =====================
export const placeOrder = (data) => API.post("/orders", data);
export const getOrders = () => API.get("/orders");

export default API;
