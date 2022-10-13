
import style from './App.module.scss';
import { Header } from './Header';
import { Main } from './Main';

function App() {
  return (
    <div className={style.app}>
        <Header />
        <Main />
        
    </div>
  );
}

export default App;
