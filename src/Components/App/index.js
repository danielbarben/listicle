import React from 'react';
import './App.css';
import Masthead from '@ta-interaktiv/react-masthead';
import '@ta-interaktiv/semantic-ui/semantic/dist/components/reset.css';
import '@ta-interaktiv/semantic-ui/semantic/dist/components/site.css';


import Navigation from '../Navigation';
import Content from '../Content';
import Footer from '../Footer';


function App() {
  return (
    <div className="App">
      <Masthead articleId='16267582'/>
      <h1>Aparecium</h1>
      <div className="lead" id="top">Thestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry!</div>
      <Navigation />
      <Content />
      
      <Footer /> 
      
    </div>
  );
}

export default App;