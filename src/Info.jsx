import React,{useContext} from 'react'
import AppContext from './context'
import style from './Info.module.scss';

export const Info = () => {
   const {popupActive, setPopupActive}=useContext(AppContext);
   return (
      <div id='info' className={style.container}>

      </div>
   )
}
