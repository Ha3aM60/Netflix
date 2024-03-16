import { Route, Routes } from 'react-router-dom'
import { AdminLayout } from './layouts/AdminLayout'
import { ListGenre } from './pages/Admin/ListGenre'
import { StartPage } from './pages/Start/StartPage'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import { ListDirectors } from './pages/Admin/ListDirectors'


function App() {


  return (
    <>
      <Routes>
        <Route path='/main' element={<AdminLayout></AdminLayout>}>
          <Route path='start' element={<StartPage></StartPage>}></Route>
        </Route>
        <Route path='/control-panel' element={<AdminLayout></AdminLayout>}>
          <Route path='listGenre' element={<ListGenre></ListGenre>}></Route>
          <Route path='listDirectors' element={<ListDirectors></ListDirectors>}></Route>
        </Route>
      </Routes>

    </>
  )
}

export default App
