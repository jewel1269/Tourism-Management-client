
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner from "../../assets/images.png"
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import image1 from "../../assets/Image1-removebg-preview.png"
import city from "../../assets/city-removebg-preview.png"
import w from "../../assets/w-removebg-preview.png"
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;


    }

    const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;


    return (
        <>
        <Swiper
          
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide id='jewel' data-aos="zoom-in">
            <div className="flex items-center justify-between">
              <div className='mr-32'>
              <h1 className='text-5xl text-red-400'>Destination Dynamics</h1>
              <br />
              <p>explores sustainable tourism strategies, emphasizing community engagement <br /> and environmental stewardship. It navigates industry trends, <br /> fostering responsible growth</p>
              <br />
              <button className="btn btn-success btn-outline lg:w-72">Explore</button>
              </div>
              <div  className='h-96 w-[700px]'>
                <img src={image1} alt="" />
               </div>
            

            </div>
            </SwiperSlide>
          <SwiperSlide id='jewel' data-aos="zoom-in">
          <div className="flex items-center justify-between">
              <div className='mr-32'>
              <h1 className='text-5xl text-red-400'>Responsible Tourism</h1>
              <br />
              <p>Empowering Communities, Protecting Heritage"
Discover how responsible tourism management <br /> strategies  empower local communities and safeguard cultural heritage, promoting equitable <br /> economic growth and preserving cultural diversity.</p>
              <br />
              <button className="btn btn-success btn-outline lg:w-72">Explore</button>
              </div>
              <div  className='h-96 w-[700px]'>
                <img src={city} alt="" />
               </div>
            

            </div>
           
         </SwiperSlide>
          <SwiperSlide id='jewel' data-aos="zoom-in">
          <div className="flex items-center justify-between">
              <div className='mr-32'>
              <h1 className='text-5xl text-red-400'>Innovative Tourism Management</h1>
              <br />
              <p>Delve into innovative tourism management approaches that navigate <br /> industry trends, integrating technology 
                and sustainable practices to ensure <br /> long-term growth while minimizing environmental impact.</p>
              <br />
              <button className="btn btn-success btn-outline lg:w-72">Explore</button>
              </div>
              <div  className='h-96 w-[700px]'>
                <img src={w} alt="" />
               </div>
            

            </div>
          </SwiperSlide>
          
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </>
    );
};

export default Banner;




