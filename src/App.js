import logo from './logo.svg';
import './App.css';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Strategy from './pages/Strategy';
import Layout from './pages/Layout';
import CompanyDetails from './pages/CompanyDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Portfolio />} />
          <Route path='/about' element={<About />} />
          <Route path='/strategy' element={<Strategy />} />
          <Route path='/portfolio/:id' element={<CompanyDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
