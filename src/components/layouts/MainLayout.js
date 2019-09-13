import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { batch, useDispatch } from 'react-redux';
import Navigation from './../ui/Navigation';
import FocusedSeries from './../ui/FocusedSeries';
import Footer from './../ui/Footer';
import useFocusedSeries from './../hooks/useFocusedSeries';
import useSearchBarVisibility from './../hooks/useSearchBarVisibility';
import { setSearchBarInput, setSearchBarVisibility, clearSearchResults } from './../../actions';

const MainLayout = props => {
    const { children, description, keywords, title } = props;
    const focusedSeries = useFocusedSeries();
    const searchBarVisibility = useSearchBarVisibility();
    const dispatch = useDispatch();

    function handleSearchBarVisibility(e) {
        e.preventDefault();

        if (searchBarVisibility) {
            batch(() => {
                dispatch(setSearchBarVisibility(false));
                dispatch(setSearchBarInput(''));
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
