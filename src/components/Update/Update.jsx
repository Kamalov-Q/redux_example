import { useDispatch, useSelector } from 'react-redux';
import './Update.css';
import { updateProfile } from '../../store/features/profileSlice';
import { useState } from 'react';
const Update = () => {

    console.log("Update Mounted");

    const name = useSelector((state) => state.profile.name);
    const email = useSelector((state) => state.profile.email);

    const [uName, setUName] = useState("");
    const [uEmail, setUEmail] = useState("");

    const dispatch = useDispatch();

    const updateUser = (e) => {
        e.preventDefault();
        dispatch(updateProfile({ userName: uName, userEmail: uEmail }));
    }


    return (
        <div className='update__container'>
            <form className='update__form' onSubmit={updateUser}>
                <div className='update__form__title'>Profilingizni tahrirlang</div>
                <input type="text" onChange={(e) => setUName(e?.target?.value)} className='update__input' placeholder="Ismingizni kiriting" />
                <input type="text" onChange={(e) => setUEmail(e?.target?.value)} className='update__input' placeholder="Emailingizni kiriting" />
                <button className='update__btn'>Update</button>
            </form>
        </div>
    )
}

export default Update
