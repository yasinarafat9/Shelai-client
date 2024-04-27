import React from 'react';
import Banner from './Banner';
import TopCategoriesMen from './TopCategoriesMen';
import TopCategoriesWomen from './TopCategoriesWomen';
import CategoriesToBag from './CategoriesToBag';
import TopBrands from './TopBrands';
import TrendingProducts from './TrendingProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoriesToBag></CategoriesToBag>
            <TrendingProducts></TrendingProducts>
            <TopCategoriesMen></TopCategoriesMen>
            <TopCategoriesWomen></TopCategoriesWomen>
            <TopBrands></TopBrands>
            <br />
        </div>
    );
};

export default Home;