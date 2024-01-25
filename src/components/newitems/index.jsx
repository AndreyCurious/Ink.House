import React from "react";
import './style.css';
import PageLayout from "../pagelayout";

function Newitems() {
  return (
    <div className="Newitems">
      <PageLayout>
        <div className="Newitems-content">
          <div className="Newitems-blocktitle">
            <img src="/Star2.png" alt="star" />
            <span className="Newitems-blocktitle-title">Новая коллекция французских авторов</span>
          </div>
          <div className="Newitems-content-description">
            <p className="Newitems-content-description-paragraph">Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений.</p>
            <p className="Newitems-content-description-paragraph">Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность направлений прогрессивного развития.</p>
          </div>
          <button className="Newitems-content-acquainted">Ознакомиться</button>
        </div>
      </PageLayout>
    </div>
  )
}

export default Newitems;