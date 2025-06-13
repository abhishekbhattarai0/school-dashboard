import './App.css'
import Home from './pages/Home'
import Layout from './pages/Layout'
import SignIn from './pages/SignIn'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Students from './pages/Students'
import Teachers from './pages/Teachers'
import Courses from './pages/Courses'
import Grades from './pages/Grades'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="students" element={<Students />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="courses" element={<Courses />} />
          <Route path="grades" element={<Grades />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
