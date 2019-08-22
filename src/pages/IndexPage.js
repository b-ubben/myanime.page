import React from 'react';
import MainLayout from './../components/layouts/MainLayout';
import Banner from './../components/ui/Banner';
import MostPopular from './../components/ui/MostPopular';

const IndexPage = () => {
    return (
        <MainLayout>
            <Banner />
            <MostPopular />
        </MainLayout>
    );
};

export default IndexPage;
