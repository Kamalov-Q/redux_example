import { useEffect } from 'react';
import './Profile.css';
import { FaUser } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Profile = () => {
    const name = useSelector((state) => state.profile.name);
    console.log("Profile name", name);
    

    console.log("Profile Mounted");

    return (
        <div className='profile__container'>
            <FaUser color='black' />
            <div className='user'>{name}</div>
        </div>
    )
}

export default Profile
