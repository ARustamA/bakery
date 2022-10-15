
import { About } from './About';

import { Main } from './Main';

import style from './App.module.scss';
import { Stages } from './Stages';
import { Formats } from './Formats';
function App() {
  return (
    <div className={style.app}>
        
        <Main />
        <About />
        <Stages />
        <Formats />
        
    </div>
  );
}

export default App;
