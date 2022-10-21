import Circle from "./Circle";
import style from "../styles/Contact.module.css";
import Pulse from "react-reveal/Pulse"
import Flip from "react-reveal/Flip"

const Contact = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Circle backgroundColor="green" left="-40vh" top="-20vh" className={style.circle}/>
        <Circle backgroundColor="yellow" right="-30vh" bottom="-60vh" className={style.circle}/>
        <h2 className={style.title}>Contact</h2>
        <Pulse>
        <h1 className={style.subtitle}>Get Your Free Estimate<hr></hr>GREENPOWER Landscaping, LLC</h1>
        </Pulse>
      <form className={style.form}>
        <input className={style.inputS} type="text" placeholder="Name" />
        <input className={style.inputS} type="text" placeholder="Phone" />
        <input className={style.inputL} type="text" placeholder="Email" />
        <input className={style.inputL} type="text" placeholder="Subject" />
        <textarea
          className={style.textArea}
          type="text"
          rows={6}
          placeholder="Message"
        />
        <button className={style.button}>SUBMIT</button>
      </form>
      <div >
        <Flip right>
          <h3 className={style.contactInfo}>
        Email: services@greenpowerlandscapes.com <br/>
        Phone: (000) 000-0000
        </h3>
        </Flip>
      </div>
      </div>
    </div>
  );
};

export default Contact;
