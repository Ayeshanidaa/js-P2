const movies = [
  {
    title: 'Inception',
    genre: 'Action',
    image: 'images/inception.jpg'
  },
  {
    title: '3 Idiots',
    genre: 'Comedy',
    image: 'images/3_idiots_poster.jpg'
  },
  {
    title: 'The Dark Knight',
    genre: 'Action',
    image: 'images/dark knight.jpg'
  },
  {
    title: 'Dangal',
    genre: 'Drama',
    image: 'images/dangal.jpg'
  },
  {
    title: 'Interstellar',
    genre: 'Drama',
    image: 'images/interstellar.jpg'
  },
  {
    title: 'Kabir Singh',
    genre: 'Romance',
    image: 'images/Kabir_Singh.jpg'
  },
  {
    title: 'The Hangover',
    genre: 'Comedy',
    image: 'images/hangover.jpg'
  },
  {
    title: 'Gully Boy',
    genre: 'Drama',
    image: 'images/Gully_Boy_poster.jpg'
  },
  {
    title: 'The Pursuit of Happyness',
    genre: 'Drama',
    image: 'images/the persuit.jpg'
  },
  {
    title: 'Bahubali: The Beginning',
    genre: 'Action',
    image: 'images/Baahubali_The_Beginning_poster.jpg'
  },
  {
    title: 'The Mask',
    genre: 'Comedy',
    image: 'images/mask.jpg'
  },
  {
    title: 'Dilwale Dulhania Le Jayenge',
    genre: 'Romance',
    image: 'images/dilwale-dulhaniya.jpg'
  },
  {
    title: 'Zindagi Na Milegi Dobara',
    genre: 'Drama',
    image: 'images/zindagi-na.jpg'
  },
  {
    title: 'PK',
    genre: 'Comedy',
    image: 'images/pk.jpg'
  },
  {
    title: 'Dream Girl',
    genre: 'Comedy',
    image: 'images/Dream_Girl_2019_poster.jpg'
  },
  {
    title: 'Mad Max: Fury Road',
    genre: 'Action',
    image: 'images/mad.jpg'
  },
  {
    title: 'Titanic',
    genre: 'Romance',
    image: 'images/MV5BYTAyOTE3MjItODljMi00ZjhjLTkyYmEtMTkzOGE1YzgzMjg0XkEyXkFqcGc@._V1_.jpg'
  },
  {
    title: 'Aashiqui 2',
    genre: 'Romance',
    image: 'images/Aashiqui_2_(Poster).jpg'
  },
  {
    title: 'Tum Bin',
    genre: 'Romance',
    image: 'images/tum-bin-et00412359-1726644351.avif'
  },
  {
    title: 'John Wick',
    genre: 'Action',
    image: 'images/John_Wick_TeaserPoster.jpg'
  }
];




const titleInput = document.getElementById('movie-title');
const genreSelect = document.getElementById('genre');
const movieList = document.getElementById('movie-list');

// Display the movies on the page
function displayMovies(filteredMovies) {
  movieList.innerHTML = '';

  if (filteredMovies.length === 0) {
    movieList.innerHTML = '<p>No movies found.</p>';
    return;
  }

  filteredMovies.forEach(movie => {
    const movieItem = document.createElement('div');
    movieItem.classList.add('movie');
    movieItem.innerHTML = `
      <img src="${movie.image}" alt="${movie.title} movie poster" style="width:150px;height:auto;">
      <h3>${movie.title}</h3>
      <p>Genre: ${movie.genre}</p>
    `;
    movieList.appendChild(movieItem);
  });
}

// Filter movies based on title and genre inputs
function filterMovies() {
  const searchTerm = titleInput.value.toLowerCase();
  const selectedGenre = genreSelect.value;

  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(searchTerm);
    const matchesGenre = selectedGenre ? movie.genre === selectedGenre : true;
    return matchesTitle && matchesGenre;
  });

  displayMovies(filteredMovies);
}


if (titleInput && genreSelect && movieList) {
  titleInput.addEventListener('input', filterMovies);
  genreSelect.addEventListener('change', filterMovies);
}


displayMovies(movies);
