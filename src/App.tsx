import './App.css'
import Home from './pages/Home'
import Layout from './pages/Layout'
import SignIn from './pages/SignIn'
import {  Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="signin" element={<SignIn />} /> */}
          <Route path="home" element={<Home />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route path="/signin" element={<SignIn />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
