import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contacto" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Ubicación</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Restaurante Ana Gourmet Carrera 65, Barrios Unidos</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Horario</p>
        <p className="p__opensans">Lun - sab: 08:30 am - 04:30 pm</p>
        <p className="p__opensans">Dom - Fes: 08:30 am - 05:00 pm</p>
      </div>
      <a href="https://www.google.com/maps/place/Restaurante+Ana+Gourmet/@4.6778308,-74.0837105,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f9b1cc16d79f7:0x3e4f80ec8da70e36!8m2!3d4.6778308!4d-74.0811356!16s%2Fg%2F1v16rbqz?entry=ttu" target="_blank" rel="noopener noreferrer">
        <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visítenos</button>
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
