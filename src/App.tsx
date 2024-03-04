import './App.css'
import { Route, Routes } from 'react-router-dom'
import { AdminLayout } from './layouts/AdminLayout'
import { AddGenre } from './pages/Admin/AddGenre'

function App() {


  return (
    <>
      <Routes>
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
