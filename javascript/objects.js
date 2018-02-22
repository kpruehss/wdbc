const movieDB = [
  (movie1 = {
    title: 'Forest Gump',
    hasWatched: true,
    rating: '5 Stars',
  }),
  (movie2 = {
    title: 'Top Gun',
    hasWatched: true,
    rating: '5 Stars',
  }),
  (movie3 = {
    title: 'Frozen',
    hasWatched: false,
    rating: '2 Stars',
  }),
  (movie4 = {
    title: 'The Red Pill',
    hasWatched: false,
    rating: '4 stars',
  }),
];

function printMovies(movie) {
  if (movie.hasWatched) {
    console.log('You have watched "' + movie.title + '" - ' + movie.rating);
  } else {
    console.log('You have not watched "' + movie.title + '" - ' + movie.rating);
  }
}

movieDB.forEach(printMovies);
