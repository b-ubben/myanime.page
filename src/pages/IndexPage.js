import React from 'react';
import MainLayout from './../components/layouts/MainLayout';
import useTopTwentyMostPopularAnime from './../hooks/useTopTwenyMostPopularAnime';
import Banner from './../components/ui/Banner';


const IndexPage = () => {
    const series = useTopTwentyMostPopularAnime();
    console.log(series);

    return (
        <MainLayout>
            <Banner />
        </MainLayout>
    );
};

export default IndexPage;
