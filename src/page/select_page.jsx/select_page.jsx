import React, { useState } from 'react';
import styles from './select_page.module.css';
import Button from '../../components/button/button';
import Select from '../../components/select/select';
import { test } from '../../api/api';
import { useLocation } from 'react-router-dom';

const SelectPage = (props) => {
    const location = useLocation();
    const pageName = location.state.name;
    const items = location.state.type;
    const [searchKeyword, setSearchKeyword] = useState({ genre: '', country: '' });
    const [searchResult, setSearchResult] = useState('');
    const [loading, setLoading] = useState(false);

    // const movie = {
    //     genre: [
    //         'Action',
    //         'Comedy',
    //         'Drama',
    //         'Fantasy',
    //         'Horror',
    //         'Mystery',
    //         'Romance',
    //         'Thrille',
    //     ],
    //     country: [
    //         'Korea',
    //         'China',
    //         'Japan',
    //         'America',
    //         'France',
    //     ],
    // };

    // const music = {
    //     genre: [
    //         'pop',
    //         'rock',
    //         'alternative',
    //         'R&B',
    //         'hip-hop',
    //         'classical',
    //     ],
    //     country: [
    //         'Korea',
    //         'China',
    //         'Japan',
    //         'America',
    //         'France',
    //     ],
    // };

    const getItem = (name, value) => {
        const newItem = name === 'genre' ? { genre: value, country: searchKeyword.country, type: pageName } : { genre: searchKeyword.genre, country: value, type: pageName };
        setSearchKeyword(newItem);
    };

    const search = () => {
        setSearchResult('');
        setLoading(true);
        test(searchKeyword)//
            .then(result => {
                setSearchResult(result);
                setLoading(false);
            });

    };

    return (
        <section className={styles.selectPage}>
            <h1 className={styles.title}>{pageName.toUpperCase()} 추천 서비스</h1>
            <div className={styles.inner}>
                <div className={styles.forms}>
                    {Object.keys(items).map((item, index) => <Select key={index} name={item} itemInfo={items[item]} getItem={getItem} />)}
                    <Button positionRight='true' search={search} />
                </div>
                <div className={styles.resultBox}>
                    <pre>
                        {searchResult && searchResult}
                        {(!searchResult && !loading) && '카테고리를 선택해 주세요.'}
                        {loading && <div className={styles.loadingBox}>
                            <span className={styles.loadingText}>Loading</span>
                            <div className={styles.loading}></div>
                        </div>}
                    </pre>
                </div>
            </div>
        </section>
    );
};
{/* <div className='border-4 border-t-sky-300 border-bg-indigo-500 mx-2 w-7 h-7 rounded-full animate-spin'></div> */ }
export default SelectPage;