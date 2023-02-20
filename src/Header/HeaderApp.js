import { ReactComponent as MainLogo } from './MainLogo.svg'
import './Header.scss'
import { useState } from 'react';

const HeaderApp = () => {
  const [activeState, setActiveState] = useState(false);
  return (
    <header className="App-header">
        <div className='MainLogo'><MainLogo/></div>
        <div className='MainMenu'> 
        <div className={`MenuBtn ${activeState ? 'active' : ''}`} onClick={()=>setActiveState(prev => !prev)}>
            <span></span>
            <span></span>
           <span></span>
          </div>
          <ul className={`MenuItems ${activeState ? 'active' : ''}`}>
            <li><a href="/#">О нас</a></li>
            <li><a className='active' href="/#">Направление</a></li>
            <li><a href="/#">Технологии</a></li>
            <li><a href="/#">Оставить заявку</a></li>
          </ul>
        </div>
      </header>
  )
}
export default HeaderApp
