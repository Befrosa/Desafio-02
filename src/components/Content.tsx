import { MovieCard } from "./MovieCard";

export function Content({selectedGenre, movies}: any) {
  return (

    <div className="container">

      <header>
        <span className="category">Categoria: <span>{selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie: any) => (
            <MovieCard 
            key ={movie.imdbID} 
            runtime={movie.Runtime} 
            poster={movie.Poster} 
            title={movie.Title} 
            rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
      
    </div>
  )
}