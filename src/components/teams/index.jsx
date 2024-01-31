import React from "react";
import './style.css';
import PageLayout from "../pagelayout";

function Team({ refItem }) {
  return (
    <div className="Team">
      <PageLayout>
        <div className="Team-container" ref={refItem}>
          <img className="Team-hand" src="./hand.png" alt="team" />
          <div className="Team-content">
            <h2 className="Team-content-title">Наша команда</h2>
            <p className="Team-content-paragraph">Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.</p>
            <div className="Team-content-persons">
              <img className="Team-content-persons-person" src="./person1.png" alt="person" />
              <img className="Team-content-persons-person" src="./person2.png" alt="person" />
              <img className="Team-content-persons-person" src="./person3.png" alt="person" />
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  )
}

export default Team;