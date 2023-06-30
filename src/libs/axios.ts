import axios from "axios";

let baseUrl = "";

if (process.env.NODE_ENV === "production") {
  // URL para ambiente de produção
  baseUrl = "https://gugo-dev.vercel.app/api";
} else {
  // URL para ambiente de desenvolvimento (localhost)
  baseUrl = "http://localhost:3333";
}

export const api = axios.create({
  baseURL: baseUrl,
});
