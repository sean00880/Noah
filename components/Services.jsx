import style from "../styles/Services.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pulse from "react-reveal/Pulse"
import ReactCardFlip from "react-card-flip";
import { startTransition } from "react";


const CardStyle = {
  height: "51vh",
  width: "43vh",
  marginBottom:"10px",
  borderRadius: "10px 10px 10px 10px",
  fontSize: "15px"
};


const Services = ({ services }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [isFlipped2, setIsFlipped2] = React.useState(false);
  const [isFlipped3, setIsFlipped3] = React.useState(false);
  return (
    <div className={style.container} id='services'>
      <div className={style.info}>
        <Pulse>
        <h1 className={style.subtitle}>Your Preferred Landscaping Company <hr></hr>Serving Iowa</h1>
        </Pulse>

        <hr className={style.hr}/>

        <h4 className={style.text}>We strive to build valuable relationships with our clients and deliver exceptional landscaping services on a routinely basis.</h4>
        <div className={style.card_wrapper}>
        <ReactCardFlip style={style.card} isFlipped={isFlipped} flipDiection="horizontal">
      <div
        style={CardStyle}
        onMouseEnter={() => setIsFlipped((prev) => !prev)}
        className={style.cardFront}
        
      >
         
        Lawn Care | Virginia   
        <hr className={style.hr}/>
        <Image src='https://i.ibb.co/pd7DXKL/lawnals.png' width={300} height={300}></Image>
         
        </div>
        
        <div
        style={CardStyle}
        onMouseLeave={() => setIsFlipped((prev) => !prev)} className={style.cardBack}>
          We use cutting-edge equipment when executing our lawn and tree maintanance operations. To ensure the safest and best cut possible, our mowers undergo routine maintenance. <hr /> Our primary landscaping services include: Mowing, Mulching, Trimming/Pruning, Seeding and Fertilizing.
          <Link href="/lawn" passHref><button className={style.readMore}>Lawn & Tree Services</button></Link>
        </div>
        
        </ReactCardFlip>
       
        <ReactCardFlip style={style.card} isFlipped={isFlipped2} flipDirection="horizontal">
      <div
        style={CardStyle}
        onMouseEnter={() => setIsFlipped2((prev) => !prev)}
        className={style.cardFront}
      >
        Other Services | Virginia   
        <hr className={style.hr}/>
        <Image src='https://i.ibb.co/H4mNzx4/guttercleaning.jpg' width={300} height={300}></Image>
      
      
      
        </div>
        
        <div
        style={CardStyle}
        onMouseLeave={() => setIsFlipped2((prev) => !prev)} className={style.cardBack}>
          Noah's Lawncare provides a diverse set of landscaping services to guarantee that your property is in its best shape. We offer: Fertilizing, Gutter Cleaning, Mulch Bed Installation, and Weed Removal.
          <Link href="/other" passHref><button className={style.readMore}>Other Services</button></Link>
        </div>
        </ReactCardFlip>
        <ReactCardFlip style={style.card} isFlipped={isFlipped3} flipDirection="horizontal">
      <div
        style={CardStyle}
        onMouseEnter={() => setIsFlipped3((prev) => !prev)}
        className={style.cardFront}
      >  
         Seasonal Services | Virginia   
        <hr className={style.hr}/>
         <Image src='https://i.ibb.co/7pPw8BK/snow.png' width={300} height={300}></Image>  

        </div>
        <div
        style={CardStyle}
        onMouseLeave={() => setIsFlipped3((prev) => !prev)} className={style.cardBack}>
          We offer our customers landscaping services all year long. We are available to help with leaf cleanup in the Spring and Fall and snow management services in the winter.
          <Link href="/seasonal" passHref><button className={style.readMore}>Seasonal Services</button></Link>
        </div>
        </ReactCardFlip>
        
        </div>
        <hr />
        <div className={style.services}>
          {services.map((service) => (
            <Link key={service.id} href={`/services/${service.name}`} passHref>
              <div className={style.service}>
             
                <span className={style.cat}>{service.title} <hr className={service.hr}/></span>
                
                <div className={style.media}>
               
                  {service.video ? (
                    <video
                      className={style.video}
                      src={`/img/${service.video}`}
                      autoPlay
                      loop
                    />
                  ) : (
                    <Image
                      src={service.photo}
                      width="100px"
                      height="100px"
                      layout="responsive"
                      objectFit="cover"
                      alt=""
                      loading="lazy"
                    />
                  )}
              
              
                </div>
                <h3 className={style.desc}>{service.desc}</h3>
              
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
