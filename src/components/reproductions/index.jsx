import React, { useState } from "react";
import PageLayout from "../pagelayout";
import './style.css';
import Card from "../card";

function Reproductions({ refItem }) {
  const data = ['Франция', 'Германия', 'Англия'];
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(false)
  const reps = [
    { idCountry: 0, country: 'France', img: './03.jpg', author: 'Марсель Руссо', title: 'Охота Амура', materials: 'Холст, масло (50х80)', price: 14500, id: 1 },
    { idCountry: 0, country: 'France', img: './4.jpg', author: 'Анри Селен', title: 'Дама с собачкой', materials: 'Акрил, бумага (50х80)', price: 16500, id: 2 },
    { idCountry: 0, country: 'France', img: './5.jpg', author: 'Франсуа Дюпон', title: 'Процедура', materials: 'Цветная литография (40х60)', price: 20000, id: 3 },
    { idCountry: 0, country: 'France', img: './6.jpg', author: 'Луи Детуш', title: 'Роза', materials: 'Акрил, бумага (50х80)', price: 12000, id: 4 },
    { idCountry: 0, country: 'France', img: './7.jpg', author: 'Франсуа Дюпон', title: 'Птичья трапеза', materials: 'Цветная литография (40х60)', price: 22500, id: 5 },
    { idCountry: 0, country: 'France', img: './9.jpg', author: 'Пьер Моранж', title: 'Пейзаж с рыбой', materials: 'Цветная литография (40х60)', price: 20000, id: 6 },
    { idCountry: 1, country: 'Germany', img: './10.jpg', author: 'Курт Вернер', title: 'Над городом', materials: 'Цветная литография (40х60)', price: 16000, id: 7 },
    { idCountry: 1, country: 'Germany', img: './11.jpg', author: 'Макс Рихтер', title: 'Птенцы', materials: 'Холст, масло (50х80)', price: 14500, id: 8 },
    { idCountry: 1, country: 'Germany', img: './12.jpg', author: 'Мартин Майер', title: 'Среди листьев', materials: 'Цветная литография (40х60)', price: 20000, id: 9 },
    { idCountry: 1, country: 'Germany', img: './13.jpg', author: 'Герман Беккер', title: 'Яркая птица', materials: 'Цветная литография (40х60)', price: 13000, id: 10 },
    { idCountry: 1, country: 'Germany', img: './14.jpg', author: 'Вульф Баэр', title: 'Дятлы', materials: 'Акрил, бумага (50х80)', price: 20000, id: 11 },
    { idCountry: 1, country: 'Germany', img: './15.jpg', author: 'Вальтер Хартманн', title: 'Большие воды', materials: 'Акрил, бумага (50х80)', price: 23000, id: 12 },
    { idCountry: 2, country: 'England', img: './16.jpg', author: 'Пол Смит', title: 'Дикий зверь', materials: 'Акварель, бумага (50х80)', price: 19500, id: 13 },
    { idCountry: 2, country: 'England', img: './17.jpg', author: 'Джон Уайт', title: 'Скалистый берег', materials: 'Цветная литография (40х60)', price: 17500, id: 15 },
    { idCountry: 2, country: 'England', img: './18.jpg', author: 'Джим Уотсон', title: 'Река и горы', materials: 'Акварель, бумага (50х80)', price: 20500, id: 16 },
    { idCountry: 2, country: 'England', img: './19.jpg', author: 'Юджин Зиллион', title: 'Белый попугай', materials: 'Цветная литография (40х60)', price: 15500, id: 17 },
    { idCountry: 2, country: 'England', img: './20.jpg', author: 'Эрик Гиллман', title: 'Ночная рыба', materials: 'Акрил, бумага (50х80)', price: 12500, id: 18 },
    { idCountry: 2, country: 'England', img: './21.jpg', author: 'Альфред Барр', title: 'Рыжий кот', materials: 'Цветная литография (40х60)', price: 21000, id: 14 },
  ]

  const changeCountry = (index) => {
    setLoading(true);
    setActive(index);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }
  return (
    <div className="Reproductions" ref={refItem}>
      <PageLayout>
        <div className="Reproductions-navbar">
          <span className="Reproductions-navbar-title">Репродукции</span>
          <div className="Reproductions-navbar-countries">
            {data.map((item, index) => (
              <button
                className={`Reproductions-navbar-countries-item ${active === index ? 'active' : ''}`}
                onClick={() => changeCountry(index)}
                key={index}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="Reproductions-cards">
          {loading ?
            reps.map((item) => (
              item.idCountry === active ?
                <Card card={null} key={item.id} />
                :
                null
            ))
            :
            reps.map((item) => (
              item.idCountry === active ?
                <Card card={item} key={item.id} />
                :
                null
            ))

          }
        </div>
      </PageLayout>
    </div>
  )
}

export default Reproductions;