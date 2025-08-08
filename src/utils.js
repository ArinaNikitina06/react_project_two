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
