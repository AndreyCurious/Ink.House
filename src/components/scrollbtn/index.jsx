import React, { useEffect, useRef } from "react";
import './style.css';

function ScrollBtn() {
  const ref = useRef(null);

  function handleScroll() {
    console.log(window.scrollY > 20)
    if (window.scrollY > 20) {
      ref.current.style.opacity = 1
    } else {
      ref.current.style.opacity = 0
    }

  }
  window.onscroll = handleScroll
  return (
    <button onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} ref={ref} className='ScrollBtn'>Наверх</button>
  )
}

export default ScrollBtn;