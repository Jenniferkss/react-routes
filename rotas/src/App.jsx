import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Sobre from './pages/Sobre/Sobre';
import Home from './pages/Home/Home';
import Servicos from './pages/Servicos/Servicos';
import Contato from './pages/Contato/Contato';
import Extra from './pages/Extra/Extra';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
function App() {
  return (
    // Editaremos aqui
  
    <BrowserRouter>
    <Navbar/>
      <main style={{minHeight: '80vh',padding: '20px'}}>
    <Routes> 
      <Route path='/' element={<Home/>} />
      <Route path='/sobre' element={<Sobre/>} />
      <Route path='/servicos' element={<Servicos/>} />
      <Route path='/contato' element={<Contato/>} />
      <Route path='/extra' element={<Extra/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

