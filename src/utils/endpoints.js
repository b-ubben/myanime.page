export const BASE_URL = 'https://kitsu.io/api/edge/anime';

export const TOP_TWENTY_MOST_POPULAR_URL = `${BASE_URL}?sort=popularityRank&page[limit]=20`;

export const TOP_TWENTY_HIGHEST_RATED_URL = `${BASE_URL}?sort=averageRating&page[limit]=20`;

export const TOP_TWENTY_HIGHEST_RANKED_URL = `${BASE_URL}?sort=ratingRank&page[limit]=20`;