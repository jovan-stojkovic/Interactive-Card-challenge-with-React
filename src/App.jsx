import { useState } from "react";
import "./Styles.scss";

const App = () => {
  const [onCardNumber, setOnCardNumber] = useState("0000 0000 0000 0000");
  const [onCardName, setOnCardName] = useState("JANE APPLESEED");
  const [onCardDate, setOnCardDate] = useState("00/00");
  const [onCardCVC, setOnCardCVC] = useState("000");

  return (
    <main>
      <div className="container">
        <div className="left-side">
          <div className="purple-side">
            <div className="logo-container"></div>
            <p className="big-p">{onCardNumber}</p>
            <div className="on-card-bottom">
              <p className="small-p">{onCardName}</p>
              <p className="small-p">{onCardDate}</p>
            </div>
          </div>
          <div className="gray-side">
            <p className="small-p">{onCardCVC}</p>
          </div>
        </div>

        <div className="right-side">
          <div className="inputs">
            <label htmlFor="name">CARDHOLDER NAME</label>
            <input type="text" placeholder="e.g. Jane Appleseed" className="big-input" />
            <label htmlFor="number">CARD NUMBER</label>
            <input type="text" placeholder="e.g. 1234 5678 9123 0000" className="big-input" />
            <div className="rest">
              <div className="date-section">
                <label htmlFor="date">EXP. DATE (MM/YY)</label>
                <div className="date-inputs">
                  <input type="text" placeholder="MM" className="small-input" />
                  <input type="text" placeholder="YY" className="small-input"/>
                </div>
              </div>
              <div className="cvc-section">
                <label htmlFor="cvc">CVC</label>
                <input type="text" placeholder="e.g. 123" className="mid-input" />
              </div>
            </div>
            <button className="confirm-button">Confirm</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
