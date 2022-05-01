import { http } from "services";
import { token } from "./constants";

// Get by id one element
export const getById = id => http.get(`/content/main/2/show/${id}?user=${token}`)

// Get all element
export const getAllMovies = page => http.get(`/content/main/2/list?page=${page}&user=${token}`).then((res) => res.data.data)