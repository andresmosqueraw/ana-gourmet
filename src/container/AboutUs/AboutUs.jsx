import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Sobre nosotros</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">En nuestro restaurante, te ofrecemos una experiencia gourmet única. Cada plato es una fusión de sabores exquisitos y presentación impecable, preparado con ingredientes frescos y de alta calidad. Ven y disfruta de una cena que deleitará todos tus sentidos.</p>
        <a href="#contact">
          <button type="button" className="custom__button">Conoce mas</button>
        </a>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nuestra Historia</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Nacimos de una pasión por la alta cocina y la creatividad. Nuestro equipo de chefs combina técnicas innovadoras con ingredientes locales para crear platos que sorprenden y encantan. Desde nuestros humildes comienzos, hemos crecido para convertirnos en un referente de la gastronomía gourmet.</p>
        <a href="#contact">
          <button type="button" className="custom__button">Conoce mas</button>
        </a>
      </div>
    </div>
  </div>
);

export default AboutUs;
