//Axios - Para usar requisiçoes HTTP
import axios from "axios";

//https://viacep.com.br/ws/83410250/json/

const api = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export default api;
