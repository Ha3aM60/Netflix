import { Route, Routes } from 'react-router-dom'
import { AdminLayout } from './layouts/AdminLayout'
import { AddGenre } from './pages/Admin/AddGenre'

function App() {


  return (
    <>
      <Routes>
        <Route path='/control-panel' element={<AdminLayout></AdminLayout>}>
          <Route path='listGenre' element={<ListGenre></ListGenre>}></Route>
          <Route path='listDirectors' element={<ListDirectors></ListDirectors>}></Route>
        </Route>
      </Routes>

    </>
  )
}

export default App
