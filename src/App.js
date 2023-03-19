
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantDetails from './Components/RestaurantDetails';

function App() {
  return (
    <Router >
      <Header/>

      <main className='py-3'>
        <Container>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/details/:id' element={<RestaurantDetails/>}/>
         </Routes>
        </Container>
      </main>
     
      <Footer/>
    </Router>
  );
}

export default App;
