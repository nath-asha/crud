import React from 'react';

const MovieCard = ({ movie, onDelete, onEdit }) => {
    return (
        <div className="card">
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
            <p>{movie.releaseYear}</p>
            <button onClick={() => onEdit(movie)}>Edit</button>
            <button onClick={() => onDelete(movie._id)}>Delete</button>
        </div>
    );
}

export default MovieCard;
