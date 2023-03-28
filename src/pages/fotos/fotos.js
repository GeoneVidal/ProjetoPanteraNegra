import React from "react";
import './styles.css';
import Logo from '../../assets/fundo.jpg';

function Fotos() {
  return (
    <>
      <header>
        <img id='logo' src={Logo} />
        <nav>
          <ul>
            <a href='/'>
              <li>Home</li>
            </a>
            <a href='/fotos'>
              <li>Fotos</li>
            </a>
            <a href='/contato'>
              <li>Contatos</li>
            </a>
          </ul>
        </nav>
      </header>
      <div className="actor-cards">
        <div className="cards">
          <div class="card1 foto1"></div>
          <div class="card1 foto2"></div>
          <div class="card1 foto3"></div>
          <div class="card1 foto4"></div>
          <div class="card1 foto5"></div>
          <div class="card1 foto6"></div>
          <div class="card1 foto7"></div>
          <div class="card1 foto8"></div>
          <div class="card1 foto9"></div>
          <div class="card1 foto10"></div>
          <div class="card1 foto11"></div>
          <div class="card1 foto12"></div>
        </div>
      </div>

      <footer>
        <img id='logo' src={Logo} />
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
    </>
  )
}

export default Fotos;