import axios from 'axios';
const articulos = axios.create({
    baseURL: 'http://localhost:3000/api/articulos'
});