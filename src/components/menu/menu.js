import React, { useState } from "react"
import { Link } from "gatsby"
import menuStyles from "./menu.module.scss"

export default function Menu(props){ 

  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
    console.log(isExpanded)
  }

  return (
  <div 
    className={[menuStyles.menu, props.mobilemenu ? menuStyles.mobile : " ", isExpanded ? menuStyles.active : " "].join(" ")}
  >

    <ul>
      <li><Link to="/" activeClassName={menuStyles.current}>Enterprise Search</Link></li>
    </ul>

    <ul>
      <li><Link to="/anti-money-laundry" activeClassName={menuStyles.current}>Anti-Money Laundry</Link></li>
      <li><Link to="/native-app-search" activeClassName={menuStyles.current}>Native App Search</Link></li>
      <li><Link to="/data-quality-assistant" activeClassName={menuStyles.current}>Data Quality Assistant</Link></li>
    </ul>

    <ul className={menuStyles.contact}>
    <li><Link to="/contact" activeClassName={menuStyles.current}>Contact sales</Link></li>
    </ul>

    <ul className={menuStyles.toggle}>
      <li onClick={toggleExpansion}>Menu</li>
    </ul>

  </div>
  )



  }