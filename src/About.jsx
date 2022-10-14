import React from 'react';
import img0 from "./image/6.webp";
import img1 from "./image/2.png";
import img2 from "./image/22.png";
import img3 from "./image/10.png";
import img4 from "./image/111.png";
import img5 from "./image/555.png";
import img6 from "./image/666.png";
import img7 from "./image/777.png";
import img8 from "./image/888.png";

import style from './About.module.scss';


export const About = () => {
  return (
    <div className={style.container} id='about'>
      <div className={style.content}>
        <div className={style.text}>
        <span>
          Почему уже более Вам нужно выбрать именно нашу ?
        </span>
        
          <span>
            Все еще сомневаетесь в выборе, оставьте контакты и мы вам обязательно перезвоним.
            <button className={style.button}>Оставить номер</button>
          </span>
        </div>
        <img src={img0} className={style.img0} alt="img0" />
        <img src={img1} className={style.img1} alt="img1" />
        <img src={img2} className={style.img2} alt="img2" />
        <img src={img3} className={style.img3} alt="img3" />
        <img src={img4} className={style.img4} alt="img4" />
        <img src={img5} className={style.img5} alt="img5" />
        <img src={img6} className={style.img6} alt="img6" />
        <img src={img7} className={style.img7} alt="img7" />
        <img src={img8} className={style.img8} alt="img8" />


      </div>
    </div>
  )
}


