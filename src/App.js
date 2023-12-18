import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Oferta from './pages/Oferta';

// const App = () => {
//   return <HomePage />;
// }

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/oferta" element={<Oferta />} />
      </Routes>
    </Router>
  );
}

export default App;
