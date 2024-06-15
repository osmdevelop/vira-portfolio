import React from 'react';
import Header from './components/Header.jsx';
import Navbar from './Navbar';
import Summary from './components/Summary';
import Biography from './components/Biography';
import Services from './components/Services';
 // Make sure you have this component created as discussed previously

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Summary />
      <Biography />
      <Services />
      
      {/* Other components will go here */}
    </div>
  );
}

export default App;
