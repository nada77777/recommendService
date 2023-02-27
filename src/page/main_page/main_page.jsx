import React from 'react';
import { BiCameraMovie } from 'react-icons/bi';
import { FaMusic } from 'react-icons/fa';
import { MdTour } from 'react-icons/md';
import MainCard from '../../components/main_card/main_card';
import styles from './main_page.module.css';

const MainPage = (props) => {
    const movie = {
        genre: [
            'Action',
            'Comedy',
            'Drama',
            'Fantasy',
            'Horror',
            'Mystery',
            'Romance',
            'Thrille',
        ],
        country: [
            'Korea',
            'China',
            'Japan',
            'America',
            'France',
        ],
    };


    const music = {
        genre: [
            'pop',
            'rock',
            'alternative',
            'R&B',
            'hip-hop',
            'classical',
        ],
        country: [
            'Korea',
            'China',
            'Japan',
            'America',
            'France',
        ],
    };

    const tourism = {
        genre: [
            'leisure',
            'business',
            'sports',
            'cultural',
        ],
        country: [
            'Korea',
            'China',
            'Japan',
            'America',
            'France',
        ],
    };


    return (
        <section className={styles.mainPage}>
            <h1 className={styles.title}>맞춤 검색 서비스</h1>
            <div className={styles.cards}>
                <MainCard name='movies' type={movie}><BiCameraMovie className={styles.icon} /></MainCard>
                <MainCard name='music' type={music} ><FaMusic className={styles.icon} /></MainCard>
                <MainCard name='tourism' type={tourism}><MdTour className={styles.icon} /></MainCard>
            </div>
        </section>
    );
}

export default MainPage;


