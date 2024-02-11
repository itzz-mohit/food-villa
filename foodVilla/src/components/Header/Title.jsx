import React from 'react'
import './Title.css'
import { LOGO_URL } from "../../utils/constants";


function Title() {
  return (
    <a href="/">
      <img
        className="logo"
        alt="restaurant-image"
        src={LOGO_URL}
      />
    </a>
  )
}

export default Title