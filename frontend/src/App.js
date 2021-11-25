import Navbar from './components/Navbar'
import {BrowserRouter} from 'react-router-dom'
// import {Route,Switch} from 'react-router-dom'
import { Routes ,Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Notes from './components/Notes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path = "/" element={<Notes/>}/>
        <Route exact path = "/login" element={<Login/>}/>
        <Route exact path = "/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
