import React from 'react'
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/aboutBackground2.png"
import { BsFillPlayCircleFill } from "react-icons/bs"

const About = () => {
  return <div className="about-section-container">
    <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
    </div>

    <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
    </div>

    <div className="about-section-text-container">
        <p className="primary-subheading" > Sobre Nosotros </p>
        <h1 className="primary-heading">
        ¿Qué es SkillUp?
        </h1>
        <p className="primary-text">
            En SkillUp, nuestro objetivo principal es ayudarte a encontrar el empleo de tus sueños. 
            Somos una plataforma dedicada a conectar a profesionales talentosos, como tú, con las mejores 
            oportunidades laborales disponibles.
        </p>
        <p className="primary-text">
            Nuestro compromiso es hacer de tu búsqueda de empleo una experiencia fluida, gratificante y exitosa. 
            Queremos ser tu aliado de confianza en el camino hacia una carrera satisfactoria.         
        </p>

        <p className="primary-text">
        ¡Únete a SkillUp hoy mismo y da el primer paso hacia tu futuro profesional!      
        </p>
        <div className="about-buttons-container">
            <button className="secondary-button"> ¡Comenzar! </button>

        </div>
    </div>

  </div>
  
}

export default About