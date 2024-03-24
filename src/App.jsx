import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "./Styles.scss";

const App = () => {
  const [onCardNumber, setOnCardNumber] = useState("0000 0000 0000 0000");
  const [onCardName, setOnCardName] = useState("JANE APPLESEED");
  const [onCardMM, setOnCardMM] = useState("00");
  const [onCardYY, setOnCardYY] = useState("00");
  const [onCardCVC, setOnCardCVC] = useState("000");

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main>
      <div className="container">
        <div className="left-side">
          <div className="purple-side">
            <div className="logo-container"></div>
            <p className="big-p">{onCardNumber}</p>
            <div className="on-card-bottom">
              <p className="small-p">{onCardName}</p>
              <p className="small-p">
                {onCardMM}/{onCardYY}
              </p>
            </div>
          </div>
          <div className="gray-side">
            <p className="small-p">{onCardCVC}</p>
          </div>
        </div>

        <div className="right-side">
          <form className="inputs" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">CARDHOLDER NAME</label>
            <input
              type="text"
              placeholder="e.g. Jane Appleseed"
              className="big-input"
              {...register("name")}
              onChange={(e) => {
                setOnCardName(e.target.value.toUpperCase());
              }}
            />
            <label htmlFor="number">CARD NUMBER</label>
            <input
              type="number"
              placeholder="e.g. 1234 5678 9123 0000"
              className="big-input"
              {...register("number")}
              onChange={(e) => {
                setOnCardNumber(e.target.value);
              }}
            />
            <div className="rest">
              <div className="date-section">
                <label htmlFor="date">EXP. DATE (MM/YY)</label>
                <div className="date-inputs">
                  <input
                    type="number"
                    placeholder="MM"
                    className="small-input"
                    onChange={(e) => {
                      setOnCardMM(e.target.value);
                    }}
                    {...register("mm")}
                  />
                  <input
                    type="number"
                    placeholder="YY"
                    className="small-input"
                    {...register("yy")}
                    onChange={(e) => {
                      setOnCardYY(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="cvc-section">
                <label htmlFor="cvc">CVC</label>
                <input
                  type="number"
                  placeholder="e.g. 123"
                  className="mid-input"
                  {...register("cvc")}
                  onChange={(e) => {
                    setOnCardCVC(e.target.value);
                  }}
                />
              </div>
            </div>
            <button className="confirm-button" type="submit">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default App;
