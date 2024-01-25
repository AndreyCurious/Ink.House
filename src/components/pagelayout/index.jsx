import React from "react";
import './style.css';

function PageLayout({ children }) {
  return (
    <div className="Container">
      {children}
    </div>
  )
}

export default PageLayout;