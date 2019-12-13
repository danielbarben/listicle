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
      <Masthead articleId='11712673'/>
      <h1>Was der Frauenstreik verändert hat</h1>
      <div className="lead" id="top">Über eine halbe Million violett gekleideter Frauen und Männer zog am 14. Juni 2019 durch die Schweizer Städte. Wir haben bei Vertreterinnen und Vertretern verschiedener Branchen nachgefragt, was in diesem halben Jahr passiert ist.
</div>
      <Navigation />
      <Content />
      
      <Footer /> 
      
    </div>
  );
}

export default App;