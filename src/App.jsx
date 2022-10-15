import { useState } from 'react';
import AppContext from './context'
import { About } from './About';
import { Main } from './Main';
import { Stages } from './Stages';
import { Formats } from './Formats';
import { Info } from './Info';
import { PopUp } from './PopUp/PopUp';

import style from './App.module.scss';

function App() {
  const[popupActive, setPopupActive] = useState(false);
  return (
    <AppContext.Provider 
    value={{ popupActive, setPopupActive}}>
    <div className={style.app}>
        
        <Main />
        <About />
        <Stages />
        <Formats />
        <Info />
        <PopUp active={popupActive} setActive={setPopupActive}/>
    </div>
    </AppContext.Provider>
  );
  
}

export default App;
