import './App.module.css';
import s from './App.module.css'
import {Header} from "../Header/Header";
import {Home} from "../Home/Home";


function App() {
  return (
    <div className={s.app}>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
