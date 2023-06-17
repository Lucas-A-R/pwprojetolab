import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contatos from './pages/Contatos';
import Header from './components/Header';
import Loja from './pages/Loja'
import Erro from './pages/Erro';
import LoginForm from './LoginForm';
function RouterApp() {
 return (
 <BrowserRouter>
 <Header />
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/loja" element={<Loja />} />
 <Route path="/sobre" element={<Sobre />} />
 <Route path="/contatos" element={<Contatos />} />
 <Route path="*" element={<Erro />} />
 <Route path="/Conta" element={<LoginForm />} />
 </Routes>
 </BrowserRouter>
 )
}
export default RouterApp; 