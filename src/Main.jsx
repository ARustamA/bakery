import React from 'react'
import pic from "./image/pic.avif";
import style from './Main.module.scss';

export const Main = () => {


  return (
    <div className={style.main}>
      <div className={style.content}>
        <h1>Как новичку запустить уютную пекарню и не прогореть?</h1>
        <span>Если нет опыта в бизнесе, есть 2 варианта старта: купить франшизу или поручить запуск компании,
          которая специализируется на этом.</span>
        <div className={style.text}>
          <span>
            Покажем и расскажем, как мы работаем
            <button className={style.button}>Скачать презентацию</button>
          </span>
          <span>
            Вы встретитесь с управляющим одной из пекарен,
            сможете задать ему вопросы лично, узнаете нюансы и этапы производства выпечки.

            <button className={style.button}>Экскурсия в пекарню</button>
          </span>
          <span>
            Все еще сомневаетесь в выборе, оставьте контакты и мы вам обязательно перезвоним.
            <button className={style.button}>Оставить номер</button>
          </span>
        </div>
        <img src={pic} className={style.pic} alt="bakery" />
      </div>

    </div>
  )
}

