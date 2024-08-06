Movie Catalogue CRUD Application
This project is a simple web application that allows users to manage a movie catalog by performing CRUD (Create, Read, Update, Delete) operations. The application is built using ReactJS for the frontend and NodeJS with ExpressJS for the backend.MongoDb is the database used.

Features
Add Movies: Users can add new movies to the catalog by entering details such as title, genre, director, and release year.
Edit Movies: Existing movies in the catalog can be updated with new information.
Delete Movies: Users can remove movies from the catalog.
Search and Filter: Users can search for movies based on various criteria, such as title, genre, or director.
Tech Stack
Frontend: ReactJS
Backend: NodeJS, ExpressJS
Database: (Mention the database if used, e.g., MongoDB, MySQL, etc.)
Installation
Prerequisites
Make sure you have the following installed on your system:

Node.js
npm (Node Package Manager)
Setup
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/nath-asha/crud.git
cd crud
Install the required dependencies:

bash
Copy code
npm install
Navigate to the client directory to install frontend dependencies:

bash
Copy code
cd client
npm install
Navigate back to the root directory:

bash
Copy code
cd ..
Start the backend server:

bash
Copy code
npm run server
In another terminal, start the frontend development server:

bash
Copy code
npm run client
The application should now be running on http://localhost:3000 for the frontend and http://localhost:5000 for the backend.

Usage
Add a Movie: Click on the "Add Movie" button and fill out the form with the movie's details. Submit the form to add the movie to the catalog.
Edit a Movie: Click the "Edit" button next to a movie in the list, make your changes in the form, and save them.
Delete a Movie: Click the "Delete" button next to a movie to remove it from the catalog.
Search and Filter: Use the search bar to filter movies by title, genre, or other criteria.
 
 
