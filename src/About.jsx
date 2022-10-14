import React from 'react';


import style from './About.module.scss';


export const About = () => {
  return (
    <div className={style.container} id='about'>
      <div className={style.content}>
      <span>
            Вы встретитесь с управляющим одной из пекарен,
            сможете задать ему вопросы лично, узнаете нюансы и этапы производства выпечки.

            <button className={style.button}>Экскурсия в пекарню</button>
          </span>
          <span>
            Все еще сомневаетесь в выборе, оставьте контакты и мы вам обязательно перезвоним.
            <button className={style.button}>Оставить номер</button>
          </span>

          <div className={style.images}>
            
          </div>
      </div>
    </div>
  )
}


