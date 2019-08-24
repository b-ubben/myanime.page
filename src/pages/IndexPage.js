import React from 'react';
import MainLayout from './../components/layouts/MainLayout';
import Banner from './../components/ui/Banner';
import MostPopular from './../components/ui/MostPopular';
import Loader from './../components/ui/Loader';
import { useSelector } from 'react-redux';

const PageContent = () => (
    <MainLayout>
        <Banner />
        <MostPopular />
    </MainLayout>
);

const IndexPage = () => {
    const initialLoadComplete = useSelector(state => state.initialLoadComplete);

    return initialLoadComplete ? <PageContent /> : <Loader />;
};

export default IndexPage;
