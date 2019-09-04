import React from 'react';
import { useSelector } from 'react-redux';
import Loader from './../components/ui/Loader';
import MainLayout from './../components/layouts/MainLayout';
import Banner from './../components/ui/Banner';
import MostPopular from './../components/ui/MostPopular';
import HighestRanked from './../components/ui/HighestRanked';
import FanFavorites from './../components/ui/FanFavorites';
import RecentlyViewed from './../components/ui/RecentlyViewed';

const PageContent = () => (
    <MainLayout>
        <Banner />
        <RecentlyViewed />
        <FanFavorites />
        <MostPopular />
        <HighestRanked />
    </MainLayout>
);

const IndexPage = () => {
    const initialLoadComplete = useSelector(state => state.initialLoadComplete);

    return initialLoadComplete ? <PageContent /> : <Loader />;
};

export default IndexPage;
