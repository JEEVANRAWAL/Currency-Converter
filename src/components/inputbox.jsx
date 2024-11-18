/* eslint-disable react/prop-types */
export default function Inputbox({
  labelName,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  return (
    <>
      <div className="main-wrapper bg-white flex justify-between p-2 w-[100%] rounded-xl mb-2">
        <div className="wrapper1 w-1/2 ">
          <label className=" font-serif font-semibold">{labelName}</label>
          <br />
          <input
            className="outline-none w-full font-mono"
            type="number"
            value={amount}
            disabled={amountDisable}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>

        <div className="wrapper2">
          <label className=" font-serif font-semibold">Currency Type</label>
          <br />
          <select
            className="outline-none font-mono"
            name="currency"
            id="name"
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisable}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
