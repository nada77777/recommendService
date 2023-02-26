import React from 'react';
import { BiCameraMovie } from 'react-icons/bi';
import { FaMusic } from 'react-icons/fa';
import { MdPets } from 'react-icons/md';
import MainCard from '../../components/main_card/main_card';
import styles from './main_page.module.css';

const MainPage = (props) => {

    return (
        <section className={styles.mainPage}>
            <h1 className={styles.title}>맞춤 검색 서비스</h1>
            <div className={styles.cards}>
                <MainCard name='Movie'><BiCameraMovie className={styles.icon} /></MainCard>
                <MainCard name='Music'><FaMusic className={styles.icon} /></MainCard>
                <MainCard name='Pet'><MdPets className={styles.icon} /></MainCard>
            </div>
        </section>
    );
}

export default MainPage;


