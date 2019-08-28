import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import Navigation from './../ui/Navigation';
import FocusedSeries from './../ui/FocusedSeries';

const MainLayout = props => {
    const { children, description, keywords, title } = props;
    const focusedSeries = useSelector(state => state.focusedSeries);

    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={description || 'MyAnime.page | An Free, Friendly Anime Database for You!'} />
                <meta name="keywords" content={keywords || 'anime, anime database, myanime, myanimepage'} />

                <title>{title || 'myAnime.Page | Anime for You!'}</title>
            </Helmet>

            <Navigation />
            <main>
                {children}
            </main>

            {!!focusedSeries.id && <FocusedSeries {...focusedSeries} />}
        </HelmetProvider>
    );
};

export default MainLayout;
