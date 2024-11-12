import { useSelector } from 'react-redux';
import './Info.css';
const Info = () => {


    const name = useSelector((state) => state.profile.name);
    const email = useSelector((state) => state.profile.email);
    

    console.log("Info Mounted");

    return (
        <div className='info__container'>
            Salom, sizni kurib turganimizdan xursandmiz!
            Sizning emailingiz : <span className='user'>{email}</span>
        </div>
    )
}

export default Info
