import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Oferta from './pages/Oferta';
import About from './pages/about';
import Contact from './pages/contact';
import Login from './pages/login';

// const App = () => {
//   return <HomePage />;
// }

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/oferta" element={<Oferta />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
