import React, { useState } from 'react';

const MovieForm = ({ onAdd, currentMovie, onEdit }) => {
    const [title, setTitle] = useState(currentMovie ? currentMovie.title : '');
    const [genre, setGenre] = useState(currentMovie ? currentMovie.genre : '');
    const [releaseYear, setReleaseYear] = useState(currentMovie ? currentMovie.releaseYear : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const movie = { title, genre, releaseYear };

        if (currentMovie) {
            movie._id = currentMovie._id;
            onEdit(movie);
        } else {
            onAdd(movie);
        }

        setTitle('');
        setGenre('');
        setReleaseYear('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="Genre" 
                value={genre} 
                onChange={(e) => setGenre(e.target.value)} 
                required 
            />
            <input 
                type="number" 
                placeholder="Release Year" 
                value={releaseYear} 
                onChange={(e) => setReleaseYear(e.target.value)} 
                required 
            />
            <button type="submit">{currentMovie ? 'Update' : 'Add'} Movie</button>
        </form>
    );
};

export default MovieForm;
