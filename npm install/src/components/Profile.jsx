import React, { useState, useEffect } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { getPassenger } from '../services/api'

const Profile = () => {
    const [profileInfo, setProfileInfo] = useState({});

    useEffect(() => {
        const fetchProfileInfo = async() => {
            try {
                let profileData;
                profileData = await getPassenger();
                console.log(profileData)

                setProfileInfo(profileData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProfileInfo();

    }, []);

  return (
    <>
      <h1 className='text-4xl font-bold m-5'>
        {profileInfo.firstName ? `Profile of ${profileInfo.firstName} ${profileInfo.lastName}` : 'Loading...'}
      </h1>
      <section className='grid grid-cols-2'>
        <div className='pl-10'>
          <FaUserCircle size={140} />
        </div>
        <ul className='list-disc'>
          <li id="profileNames" className='text-2xl'>{profileInfo && profileInfo.firstName + " " +profileInfo.lastName}</li>
          <li id='profileEmail' className='text-2xl'>{profileInfo && profileInfo.email}</li>
          <li id='profilePhone' className='text-2xl'>{profileInfo && profileInfo.phoneNumber}</li>
          <li id='profileTrips' className='text-2xl'><b>N° viajes:</b> {profileInfo && profileInfo.trips}</li>
        </ul>
      </section>
    </>
  );
};

export default Profile
