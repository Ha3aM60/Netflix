import React from 'react';
import { Link } from 'react-router-dom';


export const AdminHeader = () => {
  return (
    <>
      <div className="container">
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item"><Link to={"listGenre"} className="nav-link active" aria-current="page">Genres</Link></li>
            <li className="nav-item"><Link to={"listActors"} className="nav-link">Actors</Link></li>
            <li className="nav-item"><Link to={"listDirectors"} className="nav-link">Directors</Link></li>
            <li className="nav-item"><Link to={"listMovies"} className="nav-link">Movies</Link></li>
            <li className="nav-item"><Link to={"listSerials"} className="nav-link">Serials</Link></li>
            <li className="nav-item"><Link to={"listSeasons"} className="nav-link">Seasons</Link></li>
            <li className="nav-item"><Link to={"listEpisodes"} className="nav-link">Episodes</Link></li>
            <li className="nav-item"><Link to={"GenreSerials"} className="nav-link">Genre Serials</Link></li>
            <li className="nav-item"><Link to={"GenreMovies"} className="nav-link">Genre Movies</Link></li>
            <li className="nav-item"><Link to={"ActorsSerials"} className="nav-link">Actors Serials</Link></li>
            <li className="nav-item"><Link to={"ActorsMovies"} className="nav-link">Actors Movies</Link></li>
            <li className="nav-item"><a href="#" className="nav-link">Users</a></li>
          </ul>
        </header>
      </div>
    </>
  )
}