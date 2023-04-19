import { useEffect } from 'react';

import Masonry from 'react-masonry-css';
import './styles.css';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacters } from '../../redux/charactersSlice';

import { Link } from 'react-router-dom';

function Home() {
  const characters = useSelector((state) => state.characters.items);
  const nextPage = useSelector((state) => state.characters.page);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]);

  if (status === 'failed') {
    return <Error message={error} />;
  }

  return (
    <div>
      <h1>Characters</h1>

      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character) => (
          <div key={character.id}>
            <Link to={`/detail/${character.id}`}>
              <img
                alt={character.name}
                src={character.image}
                className="character"
              />
              <h4>{character.name}</h4>
              <p>{character.species}</p>
              <p>{character.origin.name}</p>
            </Link>
          </div>
        ))}
      </Masonry>
      <div>
        {status === 'loading' && <Loading />}
        {hasNextPage && status !== 'loading' && (
          <button onClick={() => dispatch(fetchCharacters(nextPage))}>
            Load More ({nextPage})
          </button>
        )}
        {!hasNextPage && <div>There is nothing to be shown.</div>}
      </div>
    </div>
  );
}

// {https://youtu.be/ptGJzdnyMcQ?t=349}

export default Home;
