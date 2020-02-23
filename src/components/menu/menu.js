import React, { useState } from "react"
import { Link } from "gatsby"
import menuStyles from "./menu.module.scss"

export default function Menu(props){ 

  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
  }

  return (
  <div 
    className={[menuStyles.menu, props.mobilemenu ? menuStyles.mobile : "", props.isExpanded ? menuStyles.active : ""].join(" ")}
  >

    <ul>
      <li><Link to="/" activeClassName={menuStyles.current}>Enterprise Search</Link></li>
    </ul>

    <ul>
      <li><Link to="/404" activeClassName={menuStyles.current}>Anti-Money Laundry</Link></li>
      <li><Link to="/404" activeClassName={menuStyles.current}>Native App Search</Link></li>
      <li><Link to="/404" activeClassName={menuStyles.current}>Data Quality Assistant</Link></li>
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