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
  const table = [
    { title: '25 дней до открытия', text: 'Меньше месяца до открытия Вашей пекарни', id: 1 },
    { title: 'Передовые технологии', text: 'Будут использоваться в ведении Вашего бизнеса', id: 2 },
    { title: 'Обучение', text: 'Обучим Вашу команду на наших действующих производствах', id: 3 },
    { title: 'Локация', text: 'Правильно выбранная локация — 80% успеха', id: 4 },
    { title: 'Личный маркетолог', text: 'Вам не придется беспокоиться о продвижении пекарни', id: 5 },
    { title: 'Готовы к сотрудничеству?', text: 'Оставить заявку', id: 6 },
  ]
  return (
    <div className={style.container} id='about'>
      <div className={style.content}>
        <div className={style.text}>
          <span>
            Мы, команда профессионалов из <b>Наубайхан.kz</b>, предлагаем готовое бизнес-решения для открытия собственной пекарни.
          </span>
          <span>
            Почему Вам нужно выбрать именно нашу <b>Наубайхан.kz</b>?
          </span>
          <div className={style.why}>

            {
              (table.map(item =>
                <div className={style.field}>
                  <h3 className={style.whyTitle} key={item.id}>
                    {item.title}
                  </h3>
                  <span className={style.whyText}>
                    {item.text}
                  </span>
                </div>
              ))
            }


          </div>
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


