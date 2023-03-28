import React from "react";
import './styles.css';
import Logo from '../../assets/fundo.jpg';

function Footer() {
    return(
        <footer>
            <img id='logo' src={Logo}/>
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por: Geone Vidal</span>

            <nav className="footer-navigation">
                <ul class="footer-list">
                    <a href="./">
                        <li>Home</li>
                    </a>
                    <a href="./fotos">
                        <li>Fotos</li>
                    </a>
                    <a href="./contato">
                        <li>Contatos</li>
                    </a>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;