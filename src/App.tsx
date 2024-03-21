import { Route, Routes } from 'react-router-dom'
import { AdminLayout } from './layouts/AdminLayout'
import { ListGenre } from './pages/Admin/ListGenre'
import { StartPage } from './pages/Start/StartPage'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import { ListDirectors } from './pages/Admin/ListDirectors'
import { RegisterPage } from './pages/Register/RegisterPage'
import { DefaultLayout } from './layouts/defaultLayouts/DefaultLayout'
import { ListMovies } from './pages/Admin/ListMovies'
import { GenreMovies } from './pages/Admin/GenreMovies'
import { GenreSerials } from './pages/Admin/GenreSerials'
import { ListActors } from './pages/Admin/ListActors'
import { ListSerials } from './pages/Admin/ListSerials'
import { ListSeasons } from './pages/Admin/ListSeasons'
import { ListEpisodes } from './pages/Admin/ListEpisodes'
import { ActorsSerials } from './pages/Admin/ActorsSerials'
import { ActorsMovies } from './pages/Admin/ActorMovies'


function App() {


  return (
    <>
      <Routes>
        <Route path='/main' element={<DefaultLayout></DefaultLayout>}>
          <Route path='start' element={<StartPage></StartPage>}></Route>
          <Route path='register' element={<RegisterPage></RegisterPage>}></Route>
        </Route>
        <Route path='/control-panel' element={<AdminLayout></AdminLayout>}>
          <Route path='listGenre' element={<ListGenre></ListGenre>}></Route>
          <Route path='listDirectors' element={<ListDirectors></ListDirectors>}></Route>
          <Route path='ListMovies' element={<ListMovies></ListMovies>}></Route>
          <Route path='GenreMovies' element={<GenreMovies></GenreMovies>}></Route>
          <Route path='GenreSerials' element={<GenreSerials></GenreSerials>}></Route>
          <Route path='listActors' element={<ListActors></ListActors>}></Route>
          <Route path='listSerials' element={<ListSerials></ListSerials>}></Route>
          <Route path='listSeasons' element={<ListSeasons></ListSeasons>}></Route>
          <Route path='listEpisodes' element={<ListEpisodes></ListEpisodes>}></Route>
          <Route path='ActorsSerials' element={<ActorsSerials></ActorsSerials>}></Route>\
          <Route path='ActorsMovies' element={<ActorsMovies></ActorsMovies>}></Route>
        </Route>
      </Routes>

    </>
  )
}

export default App
