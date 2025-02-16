import React, {useEffect} from 'react'
import './Menu.css'
import Logo from '../img/logo.png'
import { FaDelicious,FaShoppingCart,FaWallet, FaChartLine, FaRegClock, FaCog, FaSignOutAlt } from "react-icons/fa";

function Menu() {
  useEffect(() => {
    const mainMenuLi = document.getElementById('mainMenu').querySelectorAll('li');
    function changeActiv() {
      mainMenuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active")
    }
    mainMenuLi.forEach(n => n.addEventListener('click', changeActiv))
  } ,[])
  
  return (
    <menu>
      <img src={Logo} alt=''/>
      <ul id='mainMenu'>
        <Icon icon={<FaDelicious/>}/>
        <Icon icon={<FaShoppingCart/>}/>
        <Icon icon={<FaWallet/>}/>
        <Icon icon={<FaChartLine/>}/>
        <Icon icon={<FaRegClock/>}/>

      </ul>
      <ul className='LastMenu'>
        <Icon icon={<FaCog/>}/>
        <Icon icon={<FaSignOutAlt/>}/>

      </ul>
          </menu>
  )
}

const Icon = ({icon}) => (
    <li>
        <a href="#">{icon}</a>
    </li>
)

export default Menu
