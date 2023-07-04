# Movie Recommendation Server

This is the backend server for the [Movie Recommendation React App](https://github.com/Veronika-chenko/glq-movies-project-client).

## Technologies and libraries:
- [Express](https://expressjs.com/): A fast and minimalist web application framework for Node.js.
- [Apollo Server 4](https://www.apollographql.com/docs/apollo-server/): A community-driven, open-source GraphQL server that integrates with various Node.js frameworks, including Express.
- [GraphQL](https://graphql.org/): A query language for APIs that provides a flexible and efficient way to request and manipulate data.
- [Date-fns](https://date-fns.org/): A library for handling and formatting dates in JavaScript.
- [Axios](https://axios-http.com/): A promise-based HTTP client for making API requests.

## Available Functionality:
The Express Apollo Server 4 provides the following functionality for the Movie Recommendation React App:
1. **Get Movie List:** The server retrieves movie lists using different **queries** provided by the TMDB *'/discover/movie'* endpoint. It supports **pagination** to load more movies efficiently.

2. **Get Movie List by IDs:** Users can retrieve a list of favorite movies by passing their corresponding IDs. This functionality allows users **to create custom lists** of favorite movies.

3. **Get List of Genres:** The server provides a list of genres that can be used for filtering movies. This allows users to browse movies based on specific genres.

4. **Get Trailer:** Users can obtain the trailer for a specific movie. This functionality enables users to watch trailers directly within the application.

## Additional Resources:
[TMDB API](https://developer.themoviedb.org/docs): The API documentation for The Movie Database (TMDB), which provides the movie data used in the server.
