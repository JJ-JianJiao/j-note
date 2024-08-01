import { useEffect, useState } from "react";
import StartRating from "./StartRating";

// const tempMovieData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt0133093",
//     Title: "The Matrix",
//     Year: "1999",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt6751668",
//     Title: "Parasite",
//     Year: "2019",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
//   },
// ];

// const tempWatchedData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     runtime: 148,
//     imdbRating: 8.8,
//     userRating: 10,
//   },
//   {
//     imdbID: "tt0088763",
//     Title: "Back to the Future",
//     Year: "1985",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//     runtime: 116,
//     imdbRating: 8.5,
//     userRating: 9,
//   },
// ];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);


const KEY = '65dd60b1';
//40cc2ba4

// http://www.omdbapi.com/?apikey=[40cc2ba4]&s=interstellar
// http://www.omdbapi.com/?apikey=[yourkey]&
// http://www.omdbapi.com/?apikey=65dd60b1&s=interstellar


//"https://www.omdbapi.com/?s=Interstellar&apikey=40cc2ba4".
export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("monkey king");
  const [selectedID, setSelectedID] = useState("");
  const customRating = watched.find(w => w.imdbID === selectedID)?.userRating;
  ////The code below, will be "C A B" for mount, C B, C B, C B there are 3 times state changes inthe useEffect.
  /*
  useEffect(function () {  
    console.log('A') //after inital render
  },[])

  useEffect(function () {  
    console.log('B') // after every render
  })

  console.log('C'); //During render
  // */

  function handleSelectMovie(id) {
    setSelectedID(selectedID => id === selectedID ? null : id);
  }

  function handleCloseMovie() {
    setSelectedID(null);
  }

  function handleWatched(movie) {
    if (watched.some(e => e.imdbID === movie.imdbID)) return;
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeletewatched(id) {
    setWatched(watched => watched.filter(movie => movie.imdbID !== id));
  }

  useEffect(function () {
    const controller = new AbortController();
    async function fetchMovies() {
      // fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=interstellar`)
      //   .then(res => res.json())
      //   .then(data => setMovies(data.Search));
      try {
        setIsLoading(true);
        setError("");
        // const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${tempQuery}`);
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, { signal: controller.signal });
        if (!res.ok) throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        if (data.Response === 'False') throw new Error("Movie not found!");
        setMovies(data.Search);
        setError("");
        // console.log(data.Search);
        // console.log(data);
        // console.log(movies); //[]
      }
      catch (err) {
        if (err.name !== "AbortError") {
          console.log(err.message);
          setError(err.message);
          setMovies([]);
        }
      }
      finally {
        setIsLoading(false);
      }
    }

    if (query.trim().length < 6) {
      setMovies([]);
      setError("");
      return;
    }
    handleCloseMovie();
    fetchMovies();

    return function () {
      controller.abort();
    }
  }, [query]);



  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {(isLoading && !error) && <Loading />}
          {(!isLoading && !error) && <MoviesList movies={movies} onSelectMovie={handleSelectMovie} />}
          {error && <ErrorMsg message={error} />}
        </Box>
        <Box >
          {
            selectedID ? <MovieDetails
              selectedID={selectedID}
              customRating={customRating}
              onCloseMovie={handleCloseMovie}
              key={selectedID}
              onAddWatched={handleWatched} /> :
              <>
                <WatchedSummary watched={watched} />
                <WatchedMoviesList watched={watched} onDeleteWatched={handleDeletewatched} />
              </>
          }
        </Box>
      </Main>
    </>
  );
}

function Loading() {
  return <p className="loader">Loading...</p>;
}

function ErrorMsg({ message }) {
  return <p className="error">
    <span>💥</span>
    {message}
  </p>;
}

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return <div className="logo">
    <span role="img">🍿</span>
    <h1>usePopcorn</h1>
  </div>;
}

function Search({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
function NumResults({ movies }) {
  return <p className="num-results">
    Found <strong>{movies.length}</strong> results
    {console.log(movies.length)}
  </p>;
}

function Main({ children }) {
  return (
    <main className="main">
      {children}
    </main>
  );
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <Button isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && children}
    </div>
  );
}

function MoviesList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

function Movie({ movie, onSelectMovie }) {
  return (
    <li key={movie.imdbID} onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

function Button({ isOpen, setIsOpen }) {
  return (
    <button
      className="btn-toggle"
      onClick={() => setIsOpen((open) => !open)}
    >
      {isOpen ? "–" : "+"}
    </button>
  );
}

function MovieDetails({ selectedID, customRating, onCloseMovie, onAddWatched }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");
  const { Title: title, Year: year, Poster: poster, Runtime: runtime, imdbRating, Plot: plot, Released: released, Actors: actors, Director: director, genre } = movie;
  useEffect(function () {
    function Callback(e) {
      if (e.code === 'Escape') {
        onCloseMovie();
        // console.log("Closing");
      }
    }
    document.addEventListener('keydown', Callback);

    return function () {
      document.removeEventListener('keydown', Callback)
    }
  }, [onCloseMovie]);
  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedID,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: runtime.split(" ").at(0),
      userRating: userRating
    }
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  // console.log(title, year);

  useEffect(function () {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedID}`);
      const data = await res.json();
      // console.log(data);
      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetails();
  }, [selectedID])

  useEffect(function () {
    if (!title) return;
    document.title = `Movie | ${title}`;

    return function () {
      document.title = "usePopcorn";
      // console.log(`Clean up effect for movie ${title}`); //closure, so it will remember the titile
    };
  }, [title]);

  return <div className="details">
    {isLoading ? <Loading /> :
      <>
        <header>
          <button className="btn-back" onClick={onCloseMovie}>&larr;</button>
          <img src={poster} alt={`Poster of ${movie} movie`} />
          <div className="details-overview">
            <h2>{title}</h2>
            <p>
              {released} &bull; {runtime}
            </p>
            <p>{genre}</p>
            <p>
              <span>⭐</span>
              {imdbRating} IMDB rating
        </p>
          </div>
        </header>

        <section>
          <div className="rating">
            {isNaN(customRating) ?
              <>
                <StartRating maxRating={10} size={24} defaultRating={customRating} onSetRating={setUserRating} />
                {userRating > 0 && <button className="btn-add" onClick={handleAdd}>+ Add to list</button>}
              </>
              :
              <p>You rated with movies {customRating} ⭐</p>
            }
          </div>
          <p>
            <em>{plot}</em>
          </p>
          <p>Starring {actors}</p>
          <p>Directed by {director}</p>
          {selectedID}
        </section>
      </>
    }
  </div>
}

function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(1)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(1)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{Math.round(avgRuntime)} min</span>
        </p>
      </div>
    </div>
  );
}

function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => <WatchedMovie movie={movie} key={movie.imdbID} onDeleteWatched={onDeleteWatched} />)}
    </ul>
  );
}

function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.poster} alt={`${movie.Title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>

        <button className="btn-delete" onClick={() => onDeleteWatched(movie.imdbID)}>X</button>
      </div>
    </li>
  );
}