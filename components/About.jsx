import style from "../styles/About.module.css";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import Pulse from "react-reveal/Pulse"
import AboutCard from './AboutCard'
import ReactCardFlip from "react-card-flip";
import Slide from 'react-reveal/Slide';

const CardStyle = {
  height: "40vh",
  width: "30vh",
  marginBottom:"10px",
};





const About = () => {
    
  return (
    <div className={style.container}>
      <div className={style.info}>
        <h2 className={style.title}>Foundation</h2>
        <Pulse>
        <h1 className={style.subtitle}>About Us</h1>
        </Pulse>
        
        <hr />
        <div className={style.wrapper}>
         
        
        <div className={style.imageWrapper}>
        <Slide left>
        <div className={style.imagediv}>

        <h4 className={style.text}>GREENPOWER Landscaping was created by [XXXX]. Over the last 5 years, we have provided professional landscaping services to hundreds of commercial and resicential clients in the state of Virginia. </h4>
      
        <Image src='https://i.ibb.co/xMb27Dv/jjlandscapers.jpg' height='300vh' width='300vh' className={style.image}/>
        </div>
        </Slide>
        <hr></hr>
        <Slide right>
        <h4 className={style.text}>We strive to build valuable relationships with our clients and deliver a wide variety of exceptional services on a routinely basis. Our key values are: Honesty, Trust, Teamwork & Kindness. </h4>

        </Slide>
        </div>
       
        
        </div>

        

        <Pulse>
        <h1 className={style.subtitle2}>Our Lawn & Landscaping Services</h1>
        </Pulse>
        <div className={style.wrapper}>
          <div className={style.imageWrapper}>
          
          <Slide left>
        <h4 className={style.text}>We cater to landscaping needs for both commercial and residential properties. Our vast list of services goes beyond lawncare. We offer planting, seeding, fertilizing, hardscaping, mowing, mulching, trimming, leaf removal, snow removal, and much more. We also offer driveway and flowerbed installation. With a broad range of expertise, we are equipped to complete any assignment with the utmost quality and craftsmanship.</h4>
        </Slide>
        <hr></hr>
        <Slide right>
        <h4 className={style.text}> Licensed, insured, and with qualified staff who are familiar with both our clients and our job. Contact us right away for a free quote. </h4>
        </Slide>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
