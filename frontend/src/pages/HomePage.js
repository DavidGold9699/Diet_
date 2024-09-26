import React from 'react';
import '../styles/home.css';

const HomePage = () => {
  return (
    <div className="home-page-container">
      <h1 className="welcome-message">Welcome!</h1>
      <div className="info-messages">
        <p className="info-message">
          English: This is a small practice project, where I used React and Django to create a web page that allows users to log in or sign up, depending on whether they are in the database or not, and it is fully functional.
        </p>
        <p className="info-message">
          Español: Este es un pequeño proyecto de práctica, donde utilicé React y Django para crear una página web que permite a los usuarios iniciar sesión o registrarse, dependiendo de si están en la base de datos o no, y es completamente funcional.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
