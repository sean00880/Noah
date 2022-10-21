import style from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
      {/* <div className={`${style.circle} ${style.circle1}`} />
      <div className={`${style.circle} ${style.circle2}`} /> */}
      {/* <Circle backgroundColor="#01c686" right="-40vh" /> */}
      <div className={style.card}>
      <Image width={150} height={150} src="https://i.ibb.co/gSx5mH1/GPlogo.png" className={style.logo}></Image>
        <h1 className={style.title}>
          <span className={style.brandName}>GREENPOWER</span> Landscaping, LLC
        </h1>
        <p className={style.desc}>
         
          <h3 className={style.text}> <hr />Virginia Lawn & Landscaping Services</h3>
          <h4>This is a prototype website created by Decoded Web - Web Development Servivces</h4>
        </p>
        
      </div>

      <div className={style.card2}>
      <div className={style.cardImage}>
        </div>
        <div className={style.services}>
          <ul className={style.servicesUl}>
            <div className={style.Ul}>
            <li>Mulching</li>
            <li>Lawn Mowing</li>
            <li>Edging/Trimming</li>
            <li>Sod Installation</li>
            <li>Seeding/Fertilizing</li>
            </div>
            <div className={style.Ul}
            
            >
            <li>Snow Management</li>
            <li>Leaf/Tree Removal</li>
            <li>Weed Removal</li>
            <li>Tree/Flower Planting</li>
            <li>Tree Cutting</li>
            <li>Yard Cleanup</li>
            </div>
            
          </ul>
        </div>
      </div>
      
      </div>
      <button className={style.button}>Virginia Landscaping Services</button>
      
    </div>
     
     
  );
};

export default Intro;
