import React, { useState } from 'react';
import styles from './select_page.module.css';
import Button from '../../components/button/button';
import Select from '../../components/select/select';
import { test } from '../../api/api';

const SelectPage = (props) => {
    const [searchKeyword, setSearchKeyword] = useState({ genre: '', country: '' });
    const [searchResult, setSearchResult] = useState('');
    const aa = searchResult;
    console.log(aa);
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

    const getItem = (name, value) => {
        const newItem = name === 'genre' ? { genre: value, country: searchKeyword.country } : { genre: searchKeyword.genre, country: value };
        setSearchKeyword(newItem);
    };

    const search = () => {
        test(searchKeyword)//
            .then(result => setSearchResult(result));
    };

    return (
        <section className={styles.selectPage}>
            <h1 className={styles.title}>영화 추천 서비스</h1>
            <div className={styles.inner}>
                <div className={styles.forms}>
                    {Object.keys(movie).map((item, index) => <Select key={index} name={item} itemInfo={movie[item]} getItem={getItem} />)}
                    <Button positionRight='true' search={search} />
                </div>
                <div className={styles.resultBox}>
                    <pre>
                        {searchResult && searchResult}
                    </pre>
                </div>
            </div>
        </section>
    );
};
{/* <div className='border-4 border-t-sky-300 border-bg-indigo-500 mx-2 w-7 h-7 rounded-full animate-spin'></div> */ }
export default SelectPage;