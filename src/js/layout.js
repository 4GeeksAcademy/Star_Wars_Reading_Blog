import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FavoritesProvider } from "./views/FavoritesContext.js";
import Home from "./views/home.js";
import EntityDetails from "./views/EntityDetails.js";
import FavoritesPage from "./views/FavoritesPage.js";

export const Layout = () => {
  return (
    <Router>
      <FavoritesProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/people/:id"
            element={<EntityDetails entityType="people" />}
          />
          <Route
            path="/vehicles/:id"
            element={<EntityDetails entityType="vehicles" />}
          />
          <Route
            path="/planets/:id"
            element={<EntityDetails entityType="planets" />}
          />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </FavoritesProvider>
    </Router>
  );
};
