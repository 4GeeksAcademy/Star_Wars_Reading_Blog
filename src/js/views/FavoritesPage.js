import React, { useContext } from 'react';
import { FavoritesContext } from './FavoritesContext';

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map(item => (
          <li key={item.uid}>
            <p>{item.properties.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
