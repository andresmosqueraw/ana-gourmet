import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Recibe noticias sobre nosotros</h1>
      <p className="p__opensans">¡Y no te pierdas las últimas actualizaciones!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Correo electrónico" />
      <button type="button" className="custom__button">Suscribirse</button>
    </div>
  </div>
);

export default Newsletter;
