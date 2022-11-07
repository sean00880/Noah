import style from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";
import Link from "next/link";

const Intro = ({services, services2, services3}) => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
      {/* <div className={`${style.circle} ${style.circle1}`} />
      <div className={`${style.circle} ${style.circle2}`} /> */}
      {/* <Circle backgroundColor="#01c686" right="-40vh" /> */}
      <div className={style.card}>
      <Image width={150} height={150} src="https://i.ibb.co/Ydb8xJh/noahlogo.png" className={style.logo}></Image>
        <h1 className={style.title}>
          <span className={style.brandName}>Noah's</span> Lawncare
        </h1>
        <p className={style.desc}>
         
          <h3 className={style.text}> <hr />Iowa's Preferred Lawn & Landscaping Services</h3>
          <h4>This is a prototype website created by Decoded Web - Web Development Servivces</h4>
        </p>
        
      </div>

      <div className={style.card2}>
      <div className={style.cardImage}>
        </div>
        <div className={style.services}>
          <ul className={style.servicesUl}>
            
            <div className={style.Ul}
            >
            <span>Lawn Care Services </span><hr />
            {services.map((service) => (
              <a key={service.id} href={`/services/${service.name}`}><div>
             <li><Image src={service.photo} width='30px' height='30px' />{service.title}</li>
             </div>
             </a>
            ))}
            </div>
            <div className={style.Ul}
            >
              <span> Other Services</span><hr />
               {services3.map((service) => (
                <a key={service.id} href={`/services/${service.name}`}><div>
              <li><Image src={service.photo} width='30px' height='30px' />{service.title}</li>
              </div>
              </a>
            ))}
            </div>
            <div className={style.Ul}
            >
             <span>Seasonal Services</span><hr />
            {services2.map((service) => (
              <a key={service.id} href={`/services/${service.name}`}><div>
              <li><Image src={service.photo} width='30px' height='30px' />{service.title}</li>
              </div>
              </a>
            ))}
            </div>
          </ul>
        </div>
      </div>
      
      </div>
      <button className={style.button}>Request a Service Quote</button>
      
    </div>
     
     
  );
};

export default Intro;
