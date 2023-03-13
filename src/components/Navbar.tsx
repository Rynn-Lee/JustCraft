import Image from "next/image"
import logoOrange from "../assets/images/logo-orange.svg"
import logoGray from "../assets/images/logo-gray.svg"
import homeIco from "../assets/icons/nav/nav-home.svg"
import modpacksIco from "../assets/icons/nav/nav-modpacks.svg"
import aboutIco from "../assets/icons/nav/nav-about.svg"
import journalIco from "../assets/icons/nav/nav-journal.svg"
import menuIco from "../assets/icons/nav/bars-solid.svg"
import arrowDown from "../assets/icons/nav/nav-arrow-down.svg"
import pfp from "../assets/images/pfp.png"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { activePageButton } from "@/utils/activePageButton"

export default function Navbar(){
  
  const activePage = (clickedPage: number) => {
    activePageButton(clickedPage)
  }
  useEffect(()=>{
    setTimeout(()=>{
      activePageButton()
    }, 10)
  },[])

  return(
    <div className="navbar">
      <div className="navbar-logo"></div>
      <span className="navbar-button active-page" id="background-for-buttons"/>
      <div className="navbar-buttons">
        <Link href="/" onClick={()=>activePage(1)}>
          <span className="navbar-button"><Image src={homeIco} alt={"home"} className={"icon"} color={"#000000"}/><span> Главная</span></span>
        </Link>

        <Link href="/modpacks" onClick={()=>activePage(2)}>
          <span className="navbar-button"><Image src={modpacksIco} alt={"modpacks"} className={"icon"}/><span> Сборки</span></span>
        </Link>

        <a><span className="navbar-button menu-button" onClick={()=>activePage(3)}><Image src={menuIco} alt={"menu"} className={"icon invert"}/><span> Меню</span></span></a>

        <Link href="/about" onClick={()=>activePage(4)}>
          <span className="navbar-button"><Image src={aboutIco} alt={"about"} className={"icon"}/><span> О нас</span></span>
        </Link>

        <Link href="/journal" onClick={()=>activePage(5)}>
          <span className="navbar-button"><Image src={journalIco} alt={"journal"} className={"icon"}/><span> Журнал</span></span>
        </Link>
        
      </div>
      <div className="navbar-account">
        <div className="navbar-buttons">
          <Link href="/login" onClick={()=>activePage(6)}>
            <span className="navbar-button"><Image src={menuIco} alt={"journal"} className={"icon invert"}/><span> Вход</span></span>
          </Link>
        </div>
        {/* <span className="navbar-account-pfp"><Image src={pfp} alt={"pfp"} width={64}/></span>
        <span className="navbar-account-name">Nickname</span>
        <span className="navbar-account-arrow"><Image src={arrowDown} alt={"down"} className={"arrow-down"}/></span> */}
      </div>
    </div>
  )
}