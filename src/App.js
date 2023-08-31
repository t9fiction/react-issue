import Home from './pages/Home.js'
import How from './pages/How.js'

// BOOTSTRAP CSS 
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import './css/author.css'

import {Routes, Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/how-to-get-reap' element={<How/>} />
      </Routes>
    
    </div>
  );
}

export default App;
