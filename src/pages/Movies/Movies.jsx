import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovie } from '../../api/api';
import { Loader } from '../../components/Loading/Loading';
import MovieList from 'components/MovieList/MovieList';
import css from './Movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState(null);
  const [totalMovie, setTotalMovie] = useState(null);
  const [showLoading, setShowLoading] = useState(false);
  const [inputSearch, setInputSearch] = useState(query);

  useEffect(() => {
    if (!query) return;

    setMovies(null);

    fetchMovie(`search/movie`, query)
      .then(data => {
        setMovies(data.results);
        setTotalMovie(data.total_results);
        setShowLoading(false);
      })
      .catch(console.log);
  }, [query]);

  const handleInput = event => {
    setInputSearch(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const queryNormalized = form.query.value.toLowerCase().trim();
    setSearchParams({ query: queryNormalized });
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          className={css.input}
          value={inputSearch}
          onChange={handleInput}
          placeholder="Enter movie name"
        />
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}> Search</span>
        </button>
      </form>
      {showLoading && <Loader />}
      {movies && <MovieList movies={movies} />}
      {totalMovie === 0 && <div>Not found movies</div>}
    </>
  );
};

export default Movies;
