import React, { useState } from 'react';
import styles from './select_page.module.css';
import Button from '../../components/button/button';
import Select from '../../components/select/select';
import { searchObject } from '../../api/api';
import { useLocation } from 'react-router-dom';

const SelectPage = (props) => {
    const location = useLocation();
    const pageName = location.state.name;
    const items = location.state.type;

    const [searchKeyword, setSearchKeyword] = useState({ genre: items.genre[0], country: items.country[0] }); // 받아온 items의 각각 첫 번째 값을 초깃값으로 설정
    const [searchResult, setSearchResult] = useState('');
    const [loading, setLoading] = useState(false);

    const getItem = (name, value) => {
        const newItem = name === 'genre' ? { genre: value, country: searchKeyword.country, type: pageName } : { genre: searchKeyword.genre, country: value, type: pageName };
        setSearchKeyword(newItem);
    };

    const search = () => {
        setSearchResult('');
        setLoading(true); //검색시 loading 상태 true로 변환
        searchObject(searchKeyword)//
            .then(result => {
                setSearchResult(result);// searchObject에서 받아온 data searchResult에 전달
                setLoading(false);//searchResult받아온 후 loading 상태 false로 변환
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

export default SelectPage;