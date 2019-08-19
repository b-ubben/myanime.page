import React from 'react';
import MainLayout from './../components/layouts/MainLayout';
import useTopTwentyMostPopularAnime from './../hooks/useTopTwenyMostPopularAnime';

const IndexPage = () => {
    const series = useTopTwentyMostPopularAnime();

    return(
        <MainLayout>
            <h1>Hello World!</h1>
            {series.map(anime => <div key={anime.id}>{anime.attributes.titles.en || anime.attributes.titles.en_jp}</div>)}
            {series.length}
        </MainLayout>
    );
};

export default IndexPage;