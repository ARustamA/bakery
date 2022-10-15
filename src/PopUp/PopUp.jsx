import React from 'react'

import style from './PopUp.module.scss';
import { PopUpEnd } from './PopUpEnd';

import { PopUpSend2 } from './PopUpSend2';

export const PopUp = ({ active, setActive }) => {

   const [isValid, setIsValid] = React.useState(false);
   const [value, setValue] = React.useState('');
   console.log(isValid)
   return (
      <div className={active ? style.activeModal : style.modal} onClick={() => setActive(false)}>
         <div className={style.popup} onClick={e => e.stopPropagation()}>
            <div className={style.top}>
               
               <a className={style.close} onClick={() => setActive(false)}>
                  <svg width="33" height="33" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M42 2L22 22M2 42L22 22M22 22L2 2L42 42" stroke="#f7931e" strokeWidth="3" />
                  </svg>
               </a>

            </div>
            {isValid ? <PopUpEnd value={value} setValue={setValue} />
                     :  <PopUpSend2 value={value} setValue={setValue}
               setIsValid={setIsValid} isValid />   }
            
            
         </div>



      </div>
   )
}
