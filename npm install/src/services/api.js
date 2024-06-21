import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const BASE_URL = 'http://127.0.0.1:8080'; //Spring Boot

export const fetchLogin = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, {email, password});
        const token = response.data.token;

        return response.data;
    } catch(error) {
        console.log(error);
        throw error;
    }
};

export const fetchRegister = async (body) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, body);
      return response.data;

    } catch (error) {
      console.error('Error en fetchRegister:', error);
      throw error;
    }
  };

export const getPassenger = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${BASE_URL}/passenger/me`, {
            headers: {Authorization: `Bearer ${token}`}
        });
        return response.data;
    } catch(error){
        console.log(error);
        throw error;
    }
}

export const deletePassenger = async(id) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`${BASE_URL}/passenger/${id}`,{
            headers: {Authorization: `Bearer ${token}`}
        });
        return response.data;
    } catch(error){
        console.log(error);
        throw error;
    }
}

export const updatePassenger = async (passengerSelfResponseDTO) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`${BACKEND_URL}/passenger/me`, passengerSelfResponseDTO, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const getProducts = async (skip, limit) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${BASE_URL}/api/products`, {
            params: {
                skip,
                limit
            },
            headers: {Authorization: `Bearer ${token}`
        }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};