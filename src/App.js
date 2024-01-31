import React from 'react';
import './App.css';
import Card from './Card';




function App() {
  return (
    <div >
    
   


     <h1>My Contacts</h1>

      <Card name= "Beyonce"  
  img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
  tel="+123 456 789" 
  email="b@beyonce.com"/>

  <Card name= "Michael Jackson"  
  img="https://people.com/thmb/kH5WPADak70KeWwlyIOA4Lbz4Ng=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(709x499:711x501)/michael-jackson-210aa5866c7d4dd58de8e3af57fe919a.jpg" tel="+123 1651316" 
  email="michaelJack@hotmai.com"/>

  <Card 
  name= "Michael Jackson"  
  img="https://i.pinimg.com/originals/53/73/09/5373099eec8ba6ead7f06b4bc7a7d095.jpg" 
  tel="+123 1165115616" 
  email="museband@gmail.com"/>
    </div>
    
  );
}

export default App;
