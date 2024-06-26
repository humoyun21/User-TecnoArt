import React from 'react';
import { Carousel } from 'antd';
import Container from '../container/page';
import './style.css';
import Image from 'next/image';
import Text_img from '../../images/caruseltext.png';
import Img from '../../images/Carusel.png';

const App: React.FC = () => (
  <>
    <Container>
      <Carousel arrows infinite={true} autoplay={true} className='rounded-lg overflow-hidden custom-carousel'>
        <div>
          <div className='carousel'>
            <Image src={Text_img} width={631} height={180} alt='Text Image' className='pt-[92px] ml-[80px]'/>
            <Image src={Img} width={1360} height={400} alt='Carousel Image' className='absolute right-0 top-0'/>
          </div>
        </div>
        <div>
          <div className='carousel'>
            <Image src={Text_img} width={631} height={180} alt='Text Image' className='pt-[92px] ml-[80px]'/>
            <Image src={Img} width={1360} height={400} alt='Carousel Image' className='absolute right-0 top-0'/>
          </div>
        </div>
        <div>
          <div className='carousel'>
            <Image src={Text_img} width={631} height={180} alt='Text Image' className='pt-[92px] ml-[80px]'/>
            <Image src={Img} width={1360} height={400} alt='Carousel Image' className='absolute right-0 top-0'/>
          </div>
        </div>
      </Carousel>
    </Container>
  </>
);

export default App;
