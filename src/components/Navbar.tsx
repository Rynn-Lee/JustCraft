import Image from "next/image"
import logoOrange from "../assets/images/logo-orange.svg"
import logoGray from "../assets/images/logo-gray.svg"
import homeIco from "../assets/icons/nav/nav-home.svg"
import modpacksIco from "../assets/icons/nav/nav-modpacks.svg"
import aboutIco from "../assets/icons/nav/nav-about.svg"
import journalIco from "../assets/icons/nav/nav-journal.svg"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { activePageButton } from "@/utils/activePageButton"

export default function Navbar(){
  
  const activePage = (clickedPage: string) => {
    activePageButton(clickedPage)
  }
  useEffect(()=>{
    activePageButton()
  },[])

  return(
    <div className="navbar">
      <div className="navbar-logo"><Image src={logoGray} alt={"logo"}/></div>
      <div className="navbar-buttons">

        <Link href="/" onClick={()=>activePage("/")}>
          <span className="navbar-button"><Image src={homeIco} alt={"home"} className={"icon"} color={"#000000"}/> Главная</span>
        </Link>

        <Link href="/modpacks" onClick={()=>activePage("/modpacks")}>
          <span className="navbar-button"><Image src={modpacksIco} alt={"home"} className={"icon"}/> Сборки</span>
        </Link>

        <Link href="/about" onClick={()=>activePage("/about")}>
          <span className="navbar-button"><Image src={aboutIco} alt={"home"} className={"icon"}/> О нас</span>
        </Link>

        <Link href="/journal" onClick={()=>activePage("/journal")}>
          <span className="navbar-button"><Image src={journalIco} alt={"home"} className={"icon"}/> Журнал</span>
        </Link>

      </div>
      <div className="navbar-account">Войти</div>
    </div>
  )
}