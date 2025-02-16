import React, {useEffect, useState } from 'react';
import money from "../assets/greenmoney.png";
import friends from "../assets/friends.png";
import daily from "../assets/daily.png";
import blockchain from "../assets/blockchain.png";
import home from "../assets/home.png";
import "./style.css"
import { useLocation, useNavigate } from 'react-router-dom';

function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentScreen, setCurrentScreen] = useState("/");

  useEffect(() => {
    setCurrentScreen(location.pathname)
  },[location]);

  return (
    <nav className="navBottom fixed px-[6px] text-white bottom-2 left-4 right-4 rounded-lg bg-black flex justify-around items-center h-[76px] z-50">
      <div 
      onClick={() => navigate("/")} 
      className={`navDiv flex flex-col item-center justify-center w-14 h-14 rounded-lg ${
        currentScreen === "/" ? "blackD bg-black" : "grayD bg-gray-900"
      }`}>
        <div className="flexD flex flex-col items-center justify-center">
          <img className="w-1 h-1 object-contain homeImg" src={home} alt="M"/>
          <p className='text-xs text-center'>Home</p>
        </div>
      </div>
      <div 
      onClick={() => navigate("/earn")} 
      className={`navDiv flex flex-col item-center justify-center w-14 h-14 rounded-lg ${
        currentScreen === "/earn" ? "blackD" : "grayD"
      }`}>
        <div className="flexD flex flex-col items-center justify-center">
          <img className="w-2 h-2 object-contain homeImg" src={money} alt="M"/>
          <p className='text-xs text-center'>Earn</p>
        </div>
      </div>
      <div 
      onClick={() => navigate("/shares")} 
      className={`navDiv flex flex-col item-center justify-center w-14 h-14 rounded-lg ${
        currentScreen === "/shares" ? "blackD" : "grayD"
      }`}>
        <div className="flexD flex flex-col items-center justify-center">
          <img className="w-1 h-1 object-contain homeImg" src={friends} alt="M"/>
          <p className='text-xs text-center'>Referrals</p>
        </div>
      </div>
      <div 
      onClick={() => navigate("/daily")} 
      className={`navDiv flex flex-col item-center justify-center w-14 h-14 rounded-lg ${
        currentScreen === "/daily" ? "blackD" : "grayD"
      }`}>
        <div className="flexD flex flex-col items-center justify-center">
          <img className="w-1 h-1 object-contain homeImg" src={daily} alt="M"/>
          <p className='text-xs text-center'>Daily</p>
        </div>
      </div>
      <div 
      onClick={() => navigate("/airdrop")} 
      className={`navDiv flex flex-col item-center justify-center w-14 h-14 rounded-lg ${
        currentScreen === "/airdrop" ? "blackD" : "grayD"
      }`}>
        <div className="flexD flex flex-col items-center justify-center">
          <img className="w-1 h-1 object-contain homeImg" src={blockchain} alt="M"/>
          <p className='text-xs text-center'>Airdrop</p>
        </div>
      </div>
    </nav>
  )
}

export default BottomNavigation