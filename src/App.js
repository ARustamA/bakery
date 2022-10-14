
import { About } from './About';
import { Header } from './Header';
import { Main } from './Main';

import style from './App.module.scss';
function App() {
  return (
    <div className={style.app}>
        <Header />
        <Main />
        <About />
    </div>
  );
}

export default App;
