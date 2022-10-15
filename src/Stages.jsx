import React,{useContext} from 'react'
import AppContext from './context'
import img1 from "./image/stage/1.png";
import img2 from "./image/stage/2.png";
import img3 from "./image/stage/3.png";
import img4 from "./image/stage/4.png";
import img5 from "./image/stage/5.png";
import img6 from "./image/stage/6.png";
import img7 from "./image/stage/7.png";
import img8 from "./image/stage/8.png";
import img9 from "./image/stage/9.png";
import img10 from "./image/stage/10.png";
import img11 from "./image/stage/11.png";
import img12 from "./image/stage/12.png";
import img13 from "./image/stage/XX.webp";

import style from './Stages.module.scss';

export const Stages = ({active, setActive}) => {
   const {popupActive, setPopupActive}=useContext(AppContext);
   const stageItems = [
      { title: 'Подписание', text: 'договора концессии', img: img1, id: 1 },
      { title: 'Оплата', text: 'паушального взноса', img: img2, id: 2 },
      { title: 'Получение', text: 'франч-бука', img: img3, id: 3 },
      { title: 'Поиск', text: 'помещения', img: img4, id: 4 },
      { title: 'Подписание', text: 'договора аренды', img: img5, id: 5 },
      { title: 'Проектные работы', text: 'по помещению', img: img6, id: 6 },
      { title: 'Закуп', text: 'мебели и оборудования', img: img7, id: 7 },
      { title: 'Поиск', text: 'поставщиков сырья', img: img8, id: 8 },
      { title: 'Подбор', text: 'персонала', img: img9, id: 9 },
      { title: 'Обучение', text: 'управленцев в пекарнях', img: img10, id: 10 },
      { title: 'Приём', text: 'помещения', img: img11, id: 11 },
      { title: 'Выезд технолога', text: 'для подготовки к открытию', img: img12, id: 12 },
   ]
   return (
      <div className={style.container} id='stages'>
         <div className={style.content}>
            <h2>Этапы работы</h2>

            <div className={style.stageTable}>

               {
                  stageItems.map(item =>
                     <div className={style.items}>
                        <h4>{item.title}</h4>
                        <span>{item.text}</span>
                        <img src={item.img} alt={stageItems.title} />
                        {
                           !(item.id === 4 || item.id === 8) &&
                           <svg
                              clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591zm.289 7.563v-5.446l3.522 2.719z" fillRule="#fff" />
                           </svg>

                        }
                     </div>
                  )}
            </div>
            <img className={style.picBakery} src={img13} alt="bakery" />
            <div className={style.bottom}>
               <h3>От идеи до пекарни один клик!</h3>
               <button>Запросить договор концессии</button>
            </div>

         </div>

         <a href='#formats' className={style.arrowDawn}>
            <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1.75186 0.625054C2.05366 0.624465 2.34614 0.729574 2.57853 0.922137L9.50186 6.7088L16.4381 1.12881C16.5702 1.02151 16.7223 0.941387 16.8854 0.893038C17.0486 0.844688 17.2198 0.829067 17.389 0.847072C17.5583 0.865077 17.7223 0.916351 17.8716 0.997952C18.021 1.07955 18.1528 1.18987 18.2594 1.32255C18.3667 1.45468 18.4468 1.6067 18.4951 1.76989C18.5435 1.93308 18.5591 2.10421 18.5411 2.27346C18.5231 2.4427 18.4718 2.60672 18.3902 2.75608C18.3086 2.90545 18.1983 3.03721 18.0656 3.1438L10.3156 9.38255C10.0845 9.57253 9.79458 9.67639 9.4954 9.67639C9.19622 9.67639 8.90632 9.57253 8.67519 9.38255L0.925196 2.92422C0.794403 2.81579 0.686287 2.68262 0.60704 2.53233C0.527794 2.38205 0.478973 2.21761 0.463375 2.04843C0.447777 1.87926 0.46571 1.70866 0.516142 1.54642C0.566574 1.38419 0.648516 1.23349 0.757277 1.10297C0.877472 0.9548 1.029 0.835095 1.20097 0.752461C1.37294 0.669827 1.56107 0.626316 1.75186 0.625054Z" fill="#fff" />
            </svg>
         </a>
      </div>
   )
}
