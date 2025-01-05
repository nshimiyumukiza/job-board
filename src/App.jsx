import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router";
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import ContactPage from './Pages/ContactPage';
import Login from './Components/Login';
import About from './Components/About';
const App = () => {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Navbar />}>
<Route path='/'element ={<HomePage />} />
<Route path='contact'element ={<ContactPage />}/>
<Route path='about'element ={<About />}/>
  </Route>
  <Route path='login'element={<Login />}/>
</Routes>
</BrowserRouter>
</>
  )
}

export default App

