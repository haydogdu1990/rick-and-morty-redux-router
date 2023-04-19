import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import axios from 'axios';

function Detail() {
  const [char, setChar] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.data)
      .then((data) => setChar(data));
  });
  return (
    <div>
      {char && (
        <div>
          <h1>{char.name}</h1>
          <img src={char.image} alt="" />
        </div>
      )}
    </div>
  );
}
export default Detail;
