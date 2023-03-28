import React from "react";
import Header from "../../components/header/header.js";
import './styles.css';
import Video from '../../assets/video.mp4';
import Cards from "../../components/cards/index.js";
import Footer from "../../components/footer/index.js";





function Home(){
    return (
        <>
            <Header/>
            <div id="banner"></div>
            <div id='trailer-container'>
                <div className="content">
                    <video controls className='trailer'>
                        <source src={Video} />
                        Seu navegador não possui suporte para vídeos
                    </video>
                    <div id='sinopse'>
                        <p className='description' >
                        Rainha Ramonda, Shuri, M'Baku, Okoye e Dora Milaje 
                        lutam para proteger sua nação das potências mundiais intervenientes 
                        após a morte do rei T'Challa.
                        </p>
                        <a href="https://www.omelete.com.br/marvel-cinema/pantera-negra-2-tudo-que-sabemos#14" target={'_blank'} rel="noreferrer"  >
                        <button className="button">Curiosidades</button>
                        </a>
                    </div>
                </div>
            </div>
            <Cards />
            <Footer />
        </>
    )
}

export default Home;