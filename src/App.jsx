import { useState } from "react";
import Inputbox from "./components/inputbox.jsx";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";
import TypewriterEffect from "./components/Typewriter-effect.jsx";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("npr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const currencyNames = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(() => to);
    setTo(() => from);
    setConvertedAmount(() => amount);
    setAmount(() => convertedAmount);
  };

  function convert() {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  const words = [
    { text: "Currency", className: "text-blue-500 " },
    { text: "Converter", className: "text-red-500" },
  ];

  const words2 = [
    { text: "Upto", className: "text-white " },
    { text: "date", className: "text-red-500" },
    { text: "with", className: "text-red-500 " },
    { text: "currency", className: "" },
    { text: "latest", className: "text-red-500" },
    { text: "exchange", className: "text-white" },
    { text: "rate.", className: "text-red-500" },
  ];

  return (
    <div>
      <div
        className="main-container w-screen h-screen flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(
            'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          )`,
        }}
      >
        <TypewriterEffect words={words} />
        <TypewriterEffect words={words2} className="font-thin" />
        <div className="display-container relative top-9 bg-gray-300 p-3 pt-5 w-[30%]  bg-opacity-70 border-[3px] border-white rounded-md">
          <form
            onSubmit={(e) => {
              e.preventDefault();

              // convert();
            }}
          >
            <Inputbox
              labelName="From"
              currencyOptions={currencyNames}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
            />
            <button
              type="button"
              onClick={() => swap()}
              className=" absolute top-[35%] left-[40%] bg-slate-500 rounded-xl px-4 py-1 font-mono"
            >
              Swap
            </button>
            <Inputbox
              labelName="To"
              amount={convertedAmount}
              currencyOptions={currencyNames}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
            <button
              onClick={() => convert()}
              className="w-full bg-blue-600 text-white rounded-2xl py-3 hover:bg-blue-500 transition duration-700 font-mono"
            >
              convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
