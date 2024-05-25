import { useState,useEffect } from "react";
import menuData from "./menuData";

const MenuTop = () => {

    const [mainMenu,setMainMenu] =  useState([]);
  
    const initData = () => {
      setMainMenu(menuData);
    }
  
    useEffect(() => {
        initData()
    },[]);
  
  
    return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light" >
    <a className="navbar-brand" href="#">AJ</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
      { mainMenu.map( (mainMenu,mainMenuIndex) => {
       
        return (<li className="nav-item dropdown" key={mainMenuIndex}>
          <a className="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className={mainMenu.icon}></i>&nbsp;{mainMenu.title}
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
  
              {mainMenu.subMenu.map((subMenu,subMenuIndex) => {
                  if(subMenu.title == "divider")
                      return <div className="dropdown-divider" key={'sub' + subMenuIndex}></div>
                    else
                      return <a className="dropdown-item" href={'#' +subMenu.link} key={'sub' + subMenuIndex} ><i className={subMenu.icon}></i> {subMenu.title}</a>
                })}
          </div>
        </li>) })
      }
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
    );
}
  

export default MenuTop;


