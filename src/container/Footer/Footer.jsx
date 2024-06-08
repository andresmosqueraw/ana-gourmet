import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contáctenos</h1>
        <p className="p__opensans"></p>
        <p className="p__opensans">+601 250-95-60</p>
        <p className="p__opensans">+57 311-451-46-82</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.anagourmet} alt="footer_logo" />
        <p className="p__opensans">&quot;La mejor manera de encontrarse a uno mismo es perderse al servicio de los demás.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          {/*<FiFacebook />
          <FiTwitter />*/}
          <a href="https://www.instagram.com/chefanagourmet/" target="_blank" rel="noopener noreferrer">
            <FiInstagram />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horario</h1>
        <p className="p__opensans">Lunes-Sábado:</p>
        <p className="p__opensans">08:30 am - 04:30 pm</p>
        <p className="p__opensans">Domingos y Festivos:</p>
        <p className="p__opensans">08:30 am - 05:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Ana Gourmet. Todos los derechos reservados.</p>
    </div>

  </div>
);

export default Footer;
