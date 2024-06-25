import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import MovieForm from './MovieForm';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [currentMovie, setCurrentMovie] = useState(null);

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        const response = await axios.get('http://localhost:5000/api/movies');
        setMovies(response.data);
    };

    // const handleDelete = async (id) => {
    //     await axios.delete(`http://localhost:5000/api/movies/${id}`);
    //     fetchMovies();
    // };
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/movies/${id}`);
            setMovies(movies.filter(movie => movie._id !== id));
        } catch (err) {
            console.error('Error deleting movie:', err); // Log the error
        }
    };
    
    const handleEdit = (movie) => {
        setCurrentMovie(movie);
    };

    const handleUpdate = async (updatedMovie) => {
        await axios.put(`http://localhost:5000/api/movies/${updatedMovie._id}`, updatedMovie);
        setCurrentMovie(null);
        fetchMovies();
    };

    const handleAdd = async (newMovie) => {
        await axios.post('http://localhost:5000/api/movies', newMovie);
        fetchMovies();
    };

    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1>Movie List</h1>
            <input 
                type="text" 
                placeholder="Search..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
            />
            <MovieForm 
                onAdd={handleAdd} 
                currentMovie={currentMovie} 
                onEdit={handleUpdate} 
            />
            <div className="movie-list">
                {filteredMovies.map(movie => (
                    <MovieCard 
                        key={movie._id} 
                        movie={movie} 
                        onDelete={handleDelete} 
                        onEdit={handleEdit} 
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
