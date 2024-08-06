# Movie Catalogue CRUD Application

This project is a simple web application that allows users to manage a movie catalog by performing CRUD (Create, Read, Update, Delete) operations. The application is built using ReactJS for the frontend and NodeJS with ExpressJS for the backend.Database used is MongoDb.

## Features

- **Add Movies:** Users can add new movies to the catalog by entering details such as title, genre, director, and release year.
- **Edit Movies:** Existing movies in the catalog can be updated with new information.
- **Delete Movies:** Users can remove movies from the catalog.
- **Search and Filter:** Users can search for movies based on various criteria, such as title, genre, or director.

## Tech Stack

- **Frontend:** ReactJS
- **Backend:** NodeJS, ExpressJS
- **Database:** MongoDB

## Installation

### Prerequisites

Make sure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)

### Setup

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/nath-asha/crud.git
   cd crud
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Navigate to the `client` directory to install frontend dependencies:

   ```bash
   cd client
   npm install
   ```

4. Navigate back to the root directory:

   ```bash
   cd ..
   ```

5. Start the backend server:

   ```bash
   npm run server
   ```

6. In another terminal, start the frontend development server:

   ```bash
   npm run client
   ```

7. The application should now be running on `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## Usage

1. **Add a Movie:** Click on the "Add Movie" button and fill out the form with the movie's details. Submit the form to add the movie to the catalog.
2. **Edit a Movie:** Click the "Edit" button next to a movie in the list, make your changes in the form, and save them.
3. **Delete a Movie:** Click the "Delete" button next to a movie to remove it from the catalog.
4. **Search and Filter:** Use the search bar to filter movies by title, genre, or other criteria.

