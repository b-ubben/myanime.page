import React from 'react';
import MainLayout from './../components/layouts/MainLayout';
import useTopTwentyMostPopularAnime from './../hooks/useTopTwenyMostPopularAnime';
import Banner from './../components/ui/Banner';

const IndexPage = () => {
    const series = useTopTwentyMostPopularAnime();

    return(
        <MainLayout>
            <Banner/>
            <h1>Hello World!</h1>
            <ol>
              {series.map(anime => <li>{Object.values(anime.attributes.titles).join(' ')}</li>)}
            </ol>
        </MainLayout>
    );
};

export default IndexPage;
