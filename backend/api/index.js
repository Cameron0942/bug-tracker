import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:3000' });

//------------------------MongoDB calls//------------------------
export const createProfile = (profileInfo) => API.post('/', profileInfo);