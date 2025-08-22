export const getSortedMoviesByRating = (movies) => {
  // console.log(movies);

  const newMovies = [...movies];

  newMovies.sort((movie1, movie2) => {
    if (movie1.rating < movie2.rating) {
      return -1;
    }

    if (movie1.rating > movie2.rating) {
      return 1;
    }

    return 0;
  });

  return newMovies;
};

export const getShortStr = (str = "", countSlice, separator = "...") => {
  if (str.length >= countSlice) {
    return str.slice(0, countSlice - separator.length) + separator
  }
  return str;
};

export const getAverageRating = (movies) => {
  // console.log("getAverageRating~!!!!!!!");
  const totalRating = movies.reduce((acc, movie) => {
    if (movie.rating) {
      return acc + +movie.rating.imdb;
    }
    return acc;
  }, 0);
  return totalRating / movies.length;
};
