import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router";
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import ContactPage from './Pages/ContactPage';
import About from './Components/About';
import Authantication from './Components/auth';
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
  <Route path='login'element={<Authantication />}/>
</Routes>
</BrowserRouter>
</>
  )
}

export default App

