import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer'



function App() {
  return (
    <div className="">
      <Nav></Nav>
    <main>
      <About></About>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
    </div>
  );
}

export default App;
