import style from "../styles/LawnServices.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pulse from "react-reveal/Pulse"
import ReactCardFlip from "react-card-flip";


const CardStyle = {
  height: "40vh",
  width: "30vh",
  marginBottom:"10px",
  borderRadius: "40px 30px 30px 10px"
};

const Services = ({ services }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [isFlipped2, setIsFlipped2] = React.useState(false);
  const [isFlipped3, setIsFlipped3] = React.useState(false);
  return (
    <div className={style.container} id='services'>
      <div className={style.info}>
        <h2 className={style.title}>Lawn Services</h2>
        <Pulse>
        <h1 className={style.subtitle}>Our Lawn Services <hr></hr>Iowa </h1>
        </Pulse>

        <hr className={style.hr}/>

        <div className={style.desc}><Image src='https://i.ibb.co/pd7DXKL/lawnals.png' width="400px" height="400px" objectFit="cover"></Image>
        <h4 className={style.text}>We use cutting-edge equipment when executing our lawn and tree maintanance operations. To ensure the safest and best cut possible, our mowers undergo routine maintenance. <hr /> Our primary landscaping services include: Mowing, mulching, edging/pruning, seeding and fertilizing, flower/tree planting as well as full lawn restoration and season clean-ups. <hr/> We also offer tree, shrub and leaf removal services.</h4> 
        </div>
        <div className={style.card_wrapper}>
        
        
        </div>
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
              
                <div className={style.catInfo}><h3>{service.desc}</h3></div>
              </div>
            </Link>
          ))}
        </div>
        <h1> Not sure? Check out all of our services:</h1>
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
          We use cutting-edge equipment when executing our lawn and tree maintanance operations. To ensure the safest and best cut possible, our mowers undergo routine maintenance. <hr /> Our primary landscaping services include: Mowing, mulching, trimming/pruning, seeding and fertilizing.
          <Link href="/lawn" passHref><button className={style.readMore}>Lawn & Tree Services</button></Link>
        </div>
        
        </ReactCardFlip>
       
        <ReactCardFlip style={style.card} isFlipped={isFlipped2} flipDirection="horizontal">
      <div
        style={CardStyle}
        onMouseEnter={() => setIsFlipped2((prev) => !prev)}
        className={style.cardFront}
      >
        Installation & Repairs | Virginia   
        <hr className={style.hr}/>
        <Image src='https://i.ibb.co/H4mNzx4/guttercleaning.jpg' width={300} height={300}></Image>
      
      
      
        </div>
        
        <div
        style={CardStyle}
        onMouseLeave={() => setIsFlipped2((prev) => !prev)} className={style.cardBack}>
          GREENPOWER Landscaping provides installation and removal services to guarantee that your property is in its best shape. Check out our services for sod installation, weed removal, and tree/leaf removal.
          <Link href="/install" passHref><button className={style.readMore}>Installation/Removal Services</button></Link>
        </div>
        </ReactCardFlip>
        <ReactCardFlip style={style.card} isFlipped={isFlipped3} flipDirection="horizontal">
      <div
        style={CardStyle}
        onMouseEnter={() => setIsFlipped3((prev) => !prev)}
        className={style.cardFront}
      >  
         Seasonal & Other Services | Virginia   
        <hr className={style.hr}/>
         <Image src='https://i.ibb.co/7pPw8BK/snow.png' width={300} height={300}></Image>  

        </div>
        <div
        style={CardStyle}
        onMouseLeave={() => setIsFlipped3((prev) => !prev)} className={style.cardBack}>
          We offer our customers landscaping services all year long. We are available to help with leaf cleanup in the fall and snow removal in the winter in addition to preserving the aesthetic of your landscape in the spring and summer.
          <Link href="/other" passHref><button className={style.readMore}>Other Services</button></Link>
        </div>
        </ReactCardFlip>
        <div className={style.Links}>
          
          <Link href='/services'><span>All Services</span></Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
