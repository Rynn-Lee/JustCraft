import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import homeIco from "../assets/icons/nav/nav-home.svg"
import modpacksIco from "../assets/icons/nav/nav-modpacks.svg"
import aboutIco from "../assets/icons/nav/nav-about.svg"
import journalIco from "../assets/icons/nav/nav-journal.svg"
import { useEffect, useState } from 'react'
import { activePageButton } from "../utils/activePageButton"

export default function Home() {
  const[page, setPage] = useState(0)

  useEffect(()=>{
    console.log("Change!")
  }, [page])

  return (
    <>
      <Head><title>JustCraft - Главная</title></Head>
      <main>
        Главная
        <Link href="/"><span className="navbar-button"><Image src={homeIco} alt={"home"} className={"icon"}/> Главная</span></Link>
        <Link href="/modpacks"><span className="navbar-button"><Image src={modpacksIco} alt={"home"} className={"icon"}/> Сборки</span></Link>
        <Link href="/about"><span className="navbar-button"><Image src={aboutIco} alt={"home"} className={"icon"}/> О нас</span></Link>
        <Link href="/journal"><span className="navbar-button"><Image src={journalIco} alt={"home"} className={"icon"}/> Журнал</span></Link>
        {/* <button onClick={()=>setPage(page + 1)}>Click Me! : {page}</button> */}
      </main>
    </>
  )
}
