import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import StoreScreen from './StoreScreen';

const HomeScreen = () => {
  return (
    <>
      <section className='showcase'>
        <video autoplay='autoplay' loop='loop' width='100%' muted>
          <source src='video.mp4'></source>
        </video>
        <div className='overlay'></div>
        <div className='showcase__text'>
          <h3>Quality & Style</h3>
          <p>Golden shoe, glowing step. Shop quality and style from 1962.</p>
          <Link to='/store'>
            <Button className='showcase__btn'>Shop Now</Button>
          </Link>
        </div>
      </section>

      <h4 className='text-center mt-5'>New Arrivals</h4>

      <StoreScreen />
    </>
  );
};

export default HomeScreen;
