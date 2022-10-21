import React, { useState } from 'react';
import { Data } from "../data";
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import style from "../styles/Faq.module.css";
import Pulse from "react-reveal/Pulse"


const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
        <div className={style.container} id="faq">
        <h2 className={style.title}>FaQ</h2>
        <Pulse>
        <h1 className={style.subtitle}>Commonly asked questions</h1>
        </Pulse>
      <div className={style.wrapper}>
          {Data.map((item, index) => {
            return (
              <>
                <div className={style.wrap} onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </div>
                {clicked === index ? (
                  <div className={style.dropdown}>
                    <p>{item.answer}</p>
                    </div>
                ) : null}
              </>
            );
          })}
      </div>
      <div id="map">
      <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=martin%20drive,%20westminster,%20md&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" ></iframe>
      </div>
      </div>
    </IconContext.Provider>
  );
};

export default Accordion;