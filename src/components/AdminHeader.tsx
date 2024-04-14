import React from 'react';
import { Link } from 'react-router-dom';


export const AdminHeader = () => {
  return (
    <>
      <div className="container">
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item"><Link to={"listGenre"} className="nav-link active" aria-current="page">Genres</Link></li>
            <li className="nav-item"><Link to={"listDirectors"} className="nav-link">Directors</Link></li>
            <li className="nav-item"><a href="#" className="nav-link">Movies</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Serials</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Seasons</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Episodes</a></li>
            <li className="nav-item"><a href="#" className="nav-link">GenreSerials</a></li>
            <li className="nav-item"><a href="#" className="nav-link">GenreMovies</a></li>
            <li className="nav-item"><a href="#" className="nav-link">ActorsSerials</a></li>
            <li className="nav-item"><a href="#" className="nav-link">ActorsMovies</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Users</a></li>
          </ul>
        </header>
      </div>
    </>
  )
}