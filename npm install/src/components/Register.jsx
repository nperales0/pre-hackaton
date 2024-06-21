import React from 'react'
import { fetchRegister } from '../services/api';
import { useState } from 'react';

const Register = ({}) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        isDriver: false,
      });

      const [error, setError] = useState(null);

      const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
      };

      const handleRadioChange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value === 'true'
        });
      };

      const handleSubmit = async(e) => {
        e.preventDefault();
        try { 
            await fetchRegister(formData);
            alert('Registro existoso');
        } catch (error){
            setError(error);
            throw error
        }
      };

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName" className="block text-lg font-medium leading-6 text-gray-900">
            Nombres
          </label>
          <div className="mt-2">
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset bg-gray-200 ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-4 my-5">
          <label htmlFor="lastName" className="block text-lg font-medium leading-6 text-gray-900">
            Apellidos
          </label>
          <div className="mt-2">
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset bg-gray-200 ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-4 my-5">
          <label htmlFor="email" className="block text-lg font-medium leading-6 text-gray-900">
            Email
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset bg-gray-200 ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-4 my-5">
          <label htmlFor="password" className="block text-lg font-medium leading-6 text-gray-900">
            Contraseña
          </label>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset bg-gray-200 ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-4 my-5">
          <label htmlFor="phone" className="block text-lg font-medium leading-6 text-gray-900">
            Celular
          </label>
          <div className="mt-2">
            <input
              id="phone"
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset bg-gray-200 ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-4 my-5">
          <label className="block text-lg font-medium leading-6 text-gray-900">
            ¿Eres Conductor?
          </label>
          <div className="mt-2 flex items-center">
            <input
              id="driver"
              name="isDriver"
              type="radio"
              value="true"
              checked={formData.isDriver === true}
              onChange={handleRadioChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
            />
            <label htmlFor="driver" className="ml-3 block text-lg font-medium text-gray-900">
              Sí
            </label>
            <input
              id="passenger"
              name="isDriver"
              type="radio"
              value="false"
              checked={formData.isDriver === false}
              onChange={handleRadioChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 ml-6"
            />
            <label htmlFor="passenger" className="ml-3 block text-lg font-medium text-gray-900">
              No
            </label>
          </div>
        </div>
        {error && (
          <div className="text-red-500 text-center mb-4">
            {error}
          </div>
        )}
        <div className="flex justify-center">
          <button id="registerSubmit" className='bg-primary text-white font-bold mx-6 py-2 px-4 my-1 rounded-full cursor-pointer' type="submit">
            Registrarse
          </button>
        </div>
      </form>
    </section>
  )
}

export default Register;
