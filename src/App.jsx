import { useState } from 'react';
import AppContext from './context'
import { About } from './components/About';
import { Main } from './components/Main';
import { Stages } from './components/Stages';
import { Formats } from './components/Formats';
import { Info } from './components/Info';
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
