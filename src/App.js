import React, {useState,useEffect} from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
const axios=require('axios')

function App() {
  const [state,setState]=useState({})  
    useEffect(()=>{
      performSearch("a")
    },[])

    const searchChangeHandler=(event)=> {
      const searchTerm = event.target.value
      performSearch(searchTerm)
    }

  const performSearch=(searchTerm) =>{
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm
    axios.get(urlString)
    .then((searchResults)=>{
      const results = searchResults.data.results
      var movieRows = []

      results.forEach((movie) => {
        movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
        const movieRow = <MovieRow key={movie.id} movie={movie}/>
        movieRows.push(movieRow)
      })
      setState( {movieRows})
    })
    .catch(err=>console.log(err))
    
  }


    return (
      <div>
        
        <table className="titleBar">
          <tbody>
            <tr>
            
              <td width="8"/>
              <td>
                <h1>Movies Search using Movies DB</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
          display: 'block',
          width: "95%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} 
        onChange={searchChangeHandler} 
        placeholder="Enter the movie name"/>

        {state.movieRows}

      </div>
    );
  }


export default App;
