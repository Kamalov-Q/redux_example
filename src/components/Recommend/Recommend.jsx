import './Recommend.css';
import img from '../../assets/img.jpg';
import { useSelector } from 'react-redux';
const Recommend = () => {

    const name = useSelector((state) => state.profile.name);
    const email = useSelector((state) => state.profile.email)

    console.log("Recommend Mounted");

    return (
        <div className='recommend__container'>
            <span><span className='user'>{name}</span> uchun tavsiya qilingan</span>
            <img src={img} className='recommend__image' alt="Recommend Images" />
            <img src={img} className='recommend__image' alt="Recommend Images" />
            <div>
                <div>
                    Foydalanuvchi ismi : <span className='user'>{name}</span>
                </div>
                <div>
                    Foydalanuvchi emaili : <span className='user'>{email}</span>
                </div>
            </div>
        </div>
    )
}

export default Recommend
