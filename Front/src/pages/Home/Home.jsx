// src/pages/Home/Home.jsx
import React from 'react';
import './Home.css'; // CSS para a grade
// Atualize o caminho da importação e o nome
import CardFilmes from '../../components/CardFilmes/CardFilmes'; 

// Dados de exemplo
const movies = [
  { id: 1, title: 'Encanto', poster: '' },
  { id: 2, title: 'Encanto', poster: 'https://via.placeholder.com/250x370.png?text=Encanto+2' },
  { id: 3, title: 'Encanto', poster: 'https://via.placeholder.com/250x370.png?text=Encanto+3' },
  { id: 4, title: 'Encanto', poster: 'https://via.placeholder.com/250x370.png?text=Encanto+4' },


];

function Home() {
  return (
    <div className="home-container">
      <div className="movies-grid">
        
        {/* Renderize o componente CardFilmes */}
        {movies.map(movie => (
          <CardFilmes
            key={movie.id}      
            poster={movie.poster}
            title={movie.title}
          />
        ))}

      </div>
    </div>
  );
}

export default Home;