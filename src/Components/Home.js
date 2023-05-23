import React from 'react';
import Navbar from "./NavBar";
import BannerBackground from "../Assets/home-banner-background.png"
import BannerImage from "../Assets/home-banner-image.png"
import {FiArrowRight} from "react-icons/fi"

const Home = () => {
  return (
  <div className = "home-container">
    <Navbar />
    <div className='home-container'>

      <div className='home-text-section'>
        <h1 className='primary-heading'>
          Encontrar empleo nunca fue tan sencillo
        </h1>
        <p className='primary-text'>
        Conéctate con tu futuro profesional con nuestra nueva red laboral "SkillUp"
        </p>
        <button className='secondary-button'>
          Conocer más <FiArrowRight />
        </button>

      </div>
      <div className='home-image-container'>
        <img src={BannerImage} alt="" />
      </div>
    </div>
  </div>
  )
};



export default Home;