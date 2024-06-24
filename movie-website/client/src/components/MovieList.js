import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import MovieForm from './MovieForm';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        const response = await axios.get('http://localhost:5000/api/movies');
        setMovies(response.data);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/movies/${id}`);
        fetchMovies();
    };

    const handleEdit = async (updatedMovie) => {
        await axios.put(`http://localhost:5000/api/movies/${updatedMovie._id}`, updatedMovie);
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
            />
            <MovieForm onAdd={handleAdd} />
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
