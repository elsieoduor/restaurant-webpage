import React from 'react';
import images from '../../constants/images'
import {SubHeading} from '../../components'

import './Chef.css';

const Chef = () => (
  <div className='app__bg ap__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef'/>
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt= ' quote'/>
          <p className='p__opensans'>With great cooking comes great Rizzability</p>
        </div>    
        <p className='p__opensans'>From watching a lot of anime and Marvel growing up, I noticed people used to cook. So i too started cooking. Im in my own movie and its definitely the best part.</p>  
      </div>

      <div className='app__chef-sign'>
        <p>Yukio Jayy</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign'/>
      </div>
    </div>
  </div>
);

export default Chef;
