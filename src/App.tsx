import './App.css'
import { Route, Routes } from 'react-router-dom'
import { AdminLayout } from './layouts/AdminLayout'
//import {StartPage} from './pages/Start/StartPage';
import {StartPage} from './pages/Start/StartPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import {RegisterPage} from './pages/Register/RegisterPage'
import { AddGenre } from './pages/Admin/AddGenre'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/control-panel' element={<AdminLayout></AdminLayout>}>
          <Route path='category'>
            <Route path='addGenre' element={<AddGenre></AddGenre>}></Route>
          </Route>
        </Route>
      </Routes>

    </>
  )
}

export default App
