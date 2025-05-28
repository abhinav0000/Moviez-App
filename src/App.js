
import './App.css';
import searchIcon from './search.svg';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
//de44c15e
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=de44c15e";






const App = () => {


const [movies,setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

//API for movies
  const searchMovies = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  } 

  const movie1 = 
    {
      "Title": "Spiderman and Grandma",
      "Year": "2009",
      "imdbID": "tt1433184",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"
  }
  


  useEffect(() => {

    searchMovies('SpiderMan');
    
  }, []);
  return (

    <div className='app'>
      <h1>MoviesVerse</h1>

      <div className='search'>
        <input type="text"
         placeholder='search for movies'
         value={searchTerm}
         onChange= { (e) => setSearchTerm(e.target.value)} />
        <img src={searchIcon} alt=""
          onClick={()=>searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0 ?
        (
          <div className="container">
            {
              movies.map( (movie) => (
                <MovieCard movie={movie}/>
               ) )
            }
          </div>
        ):(
          <div className='empty'>
            <h2>No movies found</h2>
          </div>   
        )
      }
      

    </div>
    
  );



  // COUNTER CODE
  // const [counter, setCounter] = useState(0);
  // return (
  //   <div className="App">
  //     <h1>COUNTER</h1>
      
  //     <button onClick={ () => setCounter( (prevCount) => prevCount+1 )   }>+</button>
  //     <h1>{counter}</h1>
  //     <button onClick={ () => setCounter( (prevCount) => prevCount-1 )   }>-</button>
    
  //   </div>
  // );
}

export default App;
