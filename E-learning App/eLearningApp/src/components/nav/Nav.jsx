import React from "react";
import style from "./Nav.module.css";
import Hero from "../../pages/app/hero/Hero";
import Courses from "../../pages/app/courses/Courses";
import { Outlet, NavLink } from "react-router-dom";
import useTheme from "../../context/Theme.context";

function Nav() {
  const { theme, toggleTheme } = useTheme();


  return (
    <>
      <nav>
        <div className={style.nav_container}>
          <div className={style.nav_title_wrapper}>
            <NavLink to='/'>
              <img
                className={style.logo}
                src="https://files.codingninjas.in/pl-ninja-16706.svg"
                alt="logo"
              /></NavLink>

            <h4>Coding Ninjas</h4>
          </div>
          <div className={style.nav_details}>
            <button onClick={toggleTheme}>{theme === 'light-theme' ? "Dark Theme" : "Light Theme"}</button>
          </div>
          <div className={style.nav_details}>
            <NavLink to='/courses' >
              {
                ({ isActive }) => (
                  <button>{isActive ? 'On Courses' : 'Courses'}</button>
                )
              }
            </NavLink>
          </div>
        </div>


      </nav>
      <Outlet />

    </>

  );
}

export default Nav;

//  <img
//    alt='cart-icon'
//    src='https://cdn-icons-png.flaticon.com/512/4903/4903482.png'
//    className={`${style.cart_icon} ${style.icon} `}
//  />;
