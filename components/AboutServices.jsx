import style from "../styles/AboutServices.module.css";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import Pulse from "react-reveal/Pulse"
import AboutCard from './AboutCard'
import ReactCardFlip from "react-card-flip";

const CardStyle = {
  height: "40vh",
  width: "30vh",
  marginBottom:"10px",
};



const About = () => {
    const [isFlipped, setIsFlipped] = React.useState(false);
    const [isFlipped2, setIsFlipped2] = React.useState(false);
    const [isFlipped3, setIsFlipped3] = React.useState(false);
  return (
    <div className={style.container}>
      <div className={style.info}>
        <h2 className={style.title}>All Landscaping Services</h2>
        <Pulse>
        <h1 className={style.subtitle}>We Cover All Landscaping Needs</h1>
        </Pulse>
        <div className={style.wrapper}>
          
        <h4 className={style.text}>We cater to landscaping needs for both commercial and residential properties. Our vast list of services goes beyond lawncare. We offer planting, seeding, fertilizing, hardscaping, mowing, mulching, trimming, leaf removal, snow removal, and much more. We also offer driveway and flowerbed installation. With a broad range of expertise, we are equipped to complete any assignment with the utmost quality and craftsmanship.</h4>

        <hr></hr>

        <h4 className={style.text}> Licensed, insured, and with qualified staff who are familiar with both our clients and our job. Contact us right away for a free quote. </h4>

      </div>
    </div>
    </div>
  );
};

export default About;
