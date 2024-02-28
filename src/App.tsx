import './App.css'
import { Route, Routes } from 'react-router-dom'
import { AdminLayout } from './layouts/AdminLayout'

function App() {


  return (
    <>
      <Routes>
        <Route path='/control-panel' element={<AdminLayout></AdminLayout>}></Route>
      </Routes>

    </>
  )
}

export default App
