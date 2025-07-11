import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Index from './Components/Pages/Index'
import Footer from './Components/Footer/Footer'
import About from './Components/Pages/About'
import Rooms from './Components/Pages/Rooms'
import RoomsDetails from './Components/Pages/RoomsDetails'
import Facilities from './Components/Pages/Facilities'
import Blogs from './Components/Pages/Blogs'
import Contact from './Components/Pages/Contact'





function App() {
  

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/about' element={<About />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path="/RoomsDetails/:id" element={<RoomsDetails />} />
          <Route path='/facilities' element={<Facilities />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
    
  )
}

export default App
