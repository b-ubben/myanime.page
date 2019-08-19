const filterForEnglishTitlesOnly = series => series.filter(anime => !(anime.attributes.titles.en === '' && anime.attributes.titles.en_jp === ''));

export default filterForEnglishTitlesOnly;