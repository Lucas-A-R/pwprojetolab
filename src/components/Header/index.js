import {Link} from 'react-router-dom'; 

import './style.css'; 

function Header(){
    return(
        <header>
            <h2>Vendas Casadas</h2>
            <h3>O site ideal para comprar seus produtos pra casamento! S2 </h3>
            <div>
            <Link to="/">Home</Link>
            <Link to="/loja">Loja</Link>
            <Link to="/sobre">Sobre Nós</Link>
            <Link to="/contatos">Contatos</Link>
            </div> 
        </header>
    )
}
export default Header;