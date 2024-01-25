import React from "react";
import './style.css';
import PageLayout from "../pagelayout";

function Title() {
  return (
    <div className="Title">
      <PageLayout>
        <div className="Title-container">
          <div>
            <img className="Title-img" src="./bird.png" alt="" />
          </div>
          <div className="Title-content">
            <h1 className="Title-headline">Реплики картин от <span className="Title-headline-name">Inc. House</span></h1>
            <span className="Title-description">Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</span>
            <button className="Title-production">Продукция</button>
          </div>
        </div>
      </PageLayout>
    </div>
  )
}

export default Title;