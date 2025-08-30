
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { UpdateFollower } from 'react-mouse-follower';
import Hero from './components/Hero/Hero';
import Section2 from './components/Section2/Section2';
import AppleCarousel from './components/Carrousel/AppleCarrousel';
import Banner from './components/Banner/Banner';
import Carrousel2 from './components/Carrousel2';
import Footer from './components/Footer';
import {items} from './Data/data';
import { itemstho } from './Data/data';











function App() {
  

  return (
    <>
    <main className='overflow-x-hidden'>
      <UpdateFollower mouseOptions={{
        backgroundColor: "white",
        zIndex: 999,
        followSpeed: 1.5,
      }}>
      <Navbar/>
      <Hero/>
      
     <Carrousel2/>
     
      <Section2/>
      
 {/* Primer carrusel */}
 <AppleCarousel items={items} />

{/* Segundo carrusel con otros productos */}
<AppleCarousel items={itemstho} className="mt-20" />
<Banner/>


<Footer/>
      
      
     

  


      
      
      
      
      

   
    
       
      
      </UpdateFollower>
      
    </main>
     </>
  )
}

export default App
