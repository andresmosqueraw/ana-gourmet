import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Persigue el nuevo sabor" />
      <h1 className="app__header-h1">Sabor y Arte en Cada Plato</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}> Descubre la excelencia culinaria con platos exquisitos en un ambiente elegante. Ven y deleita tus sentidos con nuestra cocina gourmet. </p> 
      <a href="#menu">
        <button type="button" className="custom__button">Explorar Menú</button>
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
