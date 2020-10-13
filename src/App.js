import React from 'react';
import Contact from './components/contact';



function App() {
  return (
    <div className="App">
      <Contact 
        name="Alex Kelley" 
        image="https://randomuser.me/api/portraits/men/49.jpg" 
        isConnected={true}
      />
      <Contact 
        name="Johnni Hamilton" 
        image="https://randomuser.me/api/portraits/men/10.jpg" 
        isConnected={false}
      />
      <Contact 
        name="Marilyn Nguyen" 
        image="https://randomuser.me/api/portraits/women/21.jpg" 
        isConnected={true}
      />

    </div>
  );
}


export default App;
