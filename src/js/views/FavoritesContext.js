import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = item => {
    setFavorites(prevFavorites => [...prevFavorites, item]);
  };

  const removeFromFavorites = item => {
    setFavorites(prevFavorites =>
      prevFavorites.filter(favorite => favorite.uid !== item.uid)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
