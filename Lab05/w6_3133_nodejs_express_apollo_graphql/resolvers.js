let movies = [
  {
    id: "1",
    name: "Inception",
    director_name: "Christopher Nolan",
    production_house: "Warner Bros.",
    release_date: "2010-07-16",
    rating: 8.8
  }
];

const resolvers = {
  Query: {
    movies: () => movies,
    movie: (_, { id }) => movies.find(movie => movie.id === id)
  },
  Mutation: {
    addMovie: (_, args) => {
      const movie = {
        id: String(movies.length + 1),
        ...args
      };
      movies.push(movie);
      return movie;
    },
    updateMovie: (_, { id, ...rest }) => {
      const index = movies.findIndex(movie => movie.id === id);
      if (index === -1) return null;
      
      movies[index] = {
        ...movies[index],
        ...rest
      };
      return movies[index];
    },
    deleteMovie: (_, { id }) => {
      const index = movies.findIndex(movie => movie.id === id);
      if (index === -1) return null;
      
      const deletedMovie = movies[index];
      movies = movies.filter(movie => movie.id !== id);
      return deletedMovie;
    }
  }
};

module.exports = resolvers; 