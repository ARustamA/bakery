import React from 'react';
import style from './Info.module.scss';


export const Menu = () => {
   const menuItems = [
      { value: 'Главная', href: "#main", id: 1 },
      { value: 'О нас', href: "#about", id: 2 },
      { value: 'Этапы', href: "#stages", id: 4 },
      { value: 'Форматы', href: "#formats", id: 3 },
      { value: 'Контакты', href: "#info", id: 5 },
   ]
   return (
      <div className={style.menu}>
      
         <ul className={style.ul}>
            {menuItems.map(item =>
               <li key={item.id}>
                  <a href={item.href}>{item.value}</a>
               </li>
            )}
         </ul> 
         
      </div>
   )
}
