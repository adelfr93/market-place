import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
//import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/partials/Header';
import CartNav from './components/modules/CartNav';
import Footer from './components/partials/Footer';
import Carousel from './components/modules/Carousel';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container position-relative">
          <CartNav />
        </div>
        <Carousel />
      </main>
      <Footer />
    </>
  );
}

export default App;
