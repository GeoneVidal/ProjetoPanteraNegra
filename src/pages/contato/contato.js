import React from "react";
import './styles.css';
import { useState } from "react";
import Logo from '../../assets/fundo.jpg';
import emailjs from '@emailjs/browser'

function Contato() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert('Prencha todos os campos')
      return;
    }

    const templatParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send('service_kv7aroc', 'template_g8ly84s', templatParams, 'm71EMapffn8MvoDFl')
    .then((response) => {
      console.log('EMAIL ENVIADO', response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log('ERRO: ', err)
    })
  }

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

      <div className="container">
        <h1 className="title">CONTATO</h1>

        <form className="form" onSubmit={sendEmail}>
          <input
            className="input"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            className="input"
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea
            className="textarea"
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className="button" type="submit" value="Enviar" />
        </form>

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

export default Contato;