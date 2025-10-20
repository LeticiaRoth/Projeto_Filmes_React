// src/components/CardFilme/CardFilme.jsx
import './CardFilmes.css'; // Importe o CSS específico do card

function CardFilmes({ poster, title }) {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} />
      
    </div>
  );
}

export default CardFilmes;