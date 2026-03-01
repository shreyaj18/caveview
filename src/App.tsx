import './App.css'
import About from './pages/About'
import Accommodation from './pages/Accommodation'
import BookNow from './pages/BookNow'
import Footer from './pages/Footer'
import Hero from './pages/Hero'
import Places from './pages/Places'
import Reviews from './pages/Reviews'

function App() {

  return (
    <>
      <div className='min-h-screen'>
          <Hero/>
          <About/>
          <Accommodation/>
          <Places/>
          <Reviews/>
          <BookNow/>
          <Footer/>
      </div>
    </>
  )
}

export default App
