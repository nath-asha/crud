import React, { useState, useEffect } from 'react';

const MovieForm = ({ onAdd, currentMovie, onEdit }) => {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseYear, setReleaseYear] = useState('');

    useEffect(() => {
        if (currentMovie) {
            setTitle(currentMovie.title);
            setGenre(currentMovie.genre);
            setReleaseYear(currentMovie.releaseYear);
        } else {
            setTitle('');
            setGenre('');
            setReleaseYear('');
        }
    }, [currentMovie]);

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
