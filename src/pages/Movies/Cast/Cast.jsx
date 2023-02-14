import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovie } from '../../../api/fetchApi';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovie(`movie/${movieId}/credits`)
      .then(data => setCast(data.cast))
      .catch(console.log);
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <>
      {cast.length > 0 ? (
        <ul>
          {cast.slice(0, 19).map(({ id, name, character, profile_path }) => (
            <li key={id} className={css.item}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  className={css.img}
                  width="100"
                />
              ) : (
                <div className={css.imgNotFound}>Image not found</div>
              )}
              <div>
                <p>
                  <b>{name}</b>
                </p>
                <p>
                  Character: <b>{character}</b>
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>No casts</div>
      )}
    </>
  );
};

export default Cast;
