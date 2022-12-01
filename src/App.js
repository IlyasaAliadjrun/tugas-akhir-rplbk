import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home.js'
import Collaborator from './page/Collaborator.js'
import Contact from './page/Contact.js'
import About from './page/About.js'

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Collaborator' element={<Collaborator/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/About' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
