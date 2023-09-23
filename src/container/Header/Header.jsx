import React from 'react';
import images from '../../constants/images'
import {SubHeading} from '../../components'

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavor'/>
      <h1 className='app__header_h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>Welcome to an eye opening experience here at Yukio's Kitchen. Bringing our local and international meals all cooked and served with love.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header_img'/>
    </div>  
  </div>
);

export default Header;
