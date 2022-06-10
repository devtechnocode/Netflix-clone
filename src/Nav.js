import React, { useState , useEffect} from 'react';
import "./Nav.css";

function Nav() {
  const [show, handleShow]=useState(false);
  useEffect(() => {
    window.addEventListener("scroll",()=>{
      if (window.scrollY>100){
        handleShow(true);
      }
      else handleShow(false);
    });
    return ()=> {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);
  
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img className='nav__logo'
        src="https://www.online-tech-tips.com/wp-content/uploads/2021/05/Feature-Netflix.png"
        alt="Netflix Logo" />
        <img className='nav__avatar'
        src="https://liqd.net/media/images/211006-avatar-website-liqd-40.2e16d0ba.fill-400x400-c100.jpg"
        alt="Netflix Logo" />
    </div>
  )
}

export default Nav