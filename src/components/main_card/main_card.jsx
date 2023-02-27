import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './main_card.module.css';


const MainCard = (props) => {
    const navigate = useNavigate();
    console.log(props.music);
    return (
        <div onClick={() => navigate('/select', { state: { name: props.name, type: props.type } })} className={styles.mainCard}>
            {props.children}
            <span className={styles.title}>{props.name}</span>
        </div>
    );
};

export default MainCard;




// switch (name) {
//     case 'movie':
//         return <BiCameraMovie />

//     case 'music':
//         return <FaMusic />

//     case 'pets':
//         return <MdPets />

//     default: throw new Error('error');

// }