import './App.css'
import { Route, Routes } from 'react-router-dom'
import { AdminLayout } from './layouts/AdminLayout'
//import {StartPage} from './pages/Start/StartPage';
import {StartPage} from './pages/Start/StartPage'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>
      <Routes>
        <Route path='/control-panel' element={<AdminLayout></AdminLayout>}></Route>
        <Route path='/' element={<StartPage />} />
      </Routes>

    </>
  )
}

export default App
