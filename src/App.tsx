import { Route, Routes } from 'react-router-dom'
import { AdminLayout } from './layouts/AdminLayout'
//import {StartPage} from './pages/Start/StartPage';
import {StartPage} from './pages/Start/StartPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import {RegisterPage} from './pages/Register/RegisterPage'
import {LoginPage} from './pages/Login/LoginPage'
import {PaymentFormPage} from './pages/PaymentForm/PaymentFormPage'
import {FavoritPage} from './pages/Favorit/FavoritPage'
import {PopularFilmsPages} from './pages/PopularFilms/PopularFilmsPages'
import {PopularSerialsPages} from './pages/PopularSerials/PopularSerialsPages'
import {PopularCartoonsPages} from './pages/PopularCartoons/PopularCartoonsPages'
import {PopularAnimesPages} from './pages/PopularAnimes/PopularAnimesPages'

//import { AddGenre } from './pages/Admin/AddGenre'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/favorit' element={<FavoritPage />} />
        <Route path='/popular-films' element={<PopularFilmsPages />} />
        <Route path='/popular-serials' element={<PopularSerialsPages />} />
        <Route path='/popular-cartoons' element={<PopularCartoonsPages />} />
        <Route path='/popular-animes' element={<PopularAnimesPages />} />

        <Route path='/payment-form' element={<PaymentFormPage />} />
        <Route path='/control-panel' element={<AdminLayout></AdminLayout>}>
          {/* <Route path='listGenre' element={<ListGenre></ListGenre>}></Route> */}
          {/* <Route path='listDirectors' element={<ListDirectors></ListDirectors>}></Route> */}
        </Route>
      </Routes>

    </>
  )
}

export default App
