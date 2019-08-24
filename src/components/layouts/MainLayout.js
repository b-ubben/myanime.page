import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from './../ui/Navigation';

const MainLayout = props => {
    const { children, description, keywords, title } = props;

    return (
        <>
            <Helmet>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={description || 'MyAnime.page | An Free, Friendly Anime Database for You!'} />
                <meta name="keywords" content={keywords || 'anime, anime database, myanime, myanimepage'} />

                <title>{title || 'MyAnime.Page | Anime for You!'}</title>
            </Helmet>

            <Navigation />
            <main>
                {children}
            </main>
        </>
    );
};

export default MainLayout;
