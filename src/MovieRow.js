import React from 'react';

function MovieRow(props){

  return (
    <table key={props.movie.id}>
    <tbody>
      <tr>
        <td>
          <img alt="poster" width="120" src={props.movie.poster_src}/>
        </td>
        <td>
          <h3>{props.movie.title}</h3>
          <p>{props.movie.overview}</p>
          <a href={"https://www.themoviedb.org/movie/" + props.movie.id} style={{textDecoration:`none` ,color:  `red`,fontSize:`18px`,backgroundColor: `black`,padding:`4px`}} >View more</a>
        </td>
      </tr>
    </tbody>
  </table>
  )
}

export default MovieRow