import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { batch, useDispatch } from 'react-redux';
import Navigation from './../ui/Navigation';
import FocusedSeries from './../ui/FocusedSeries';
import Footer from './../ui/Footer';
import useFocusedSeries from './../hooks/useFocusedSeries';
import useSearchBarInput from './../hooks/useSearchBarInput';
import useSearchBarVisibility from './../hooks/useSearchBarVisibility';
import { setSearchBarVisibility, clearSearchResults } from './../../actions';

const MainLayout = props => {
    const { children, description, keywords, title } = props;
    const focusedSeries = useFocusedSeries();
    const searchBarInput = useSearchBarInput();
    const searchBarVisibility = useSearchBarVisibility();
    const dispatch = useDispatch();

    function handleSearchBarVisibility(e) {
        e.preventDefault();

        if (searchBarVisibility && searchBarInput === '') {
            batch(() => {
                dispatch(setSearchBarVisibility(false));
                dispatch(clearSearchResults());
            });
        }
    }

    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={description || 'myAnime.Page | Anime for you!'} />
                <meta name="keywords" content={keywords || 'anime, anime database, myanime, myanimepage'} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="myAnime.Page" />
                <meta name="twitter:description" content="Anime for you! Powered by Kitsu.io API" />
                <meta name="twitter:image" content="https://images.ubben.co/myanimepage-twitter-card.png" />
                <meta name="twitter:image:alt" content="Index page of myAnime.Page" />

                <title>{title || 'myAnime.Page | Anime for You!'}</title>
            </Helmet>

            <Navigation />
            <main onClick={handleSearchBarVisibility}>
                {children}
                {!!focusedSeries.id && <FocusedSeries {...focusedSeries} />}
            </main>
            <Footer />
        </HelmetProvider>
    );
};

export default MainLayout;
