import React from 'react';
import MainLayout from './../components/layouts/MainLayout';
import useTopTwentyMostPopularAnime from './../hooks/useTopTwenyMostPopularAnime';
import Banner from './../components/ui/Banner';


const IndexPage = () => {
    const series = useTopTwentyMostPopularAnime();

    return (
        <MainLayout>
            <Banner />
            {console.log(series)}
        </MainLayout>
    );
};

export default IndexPage;
