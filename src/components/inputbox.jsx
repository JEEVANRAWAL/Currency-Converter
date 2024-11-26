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
      <div className="main-wrapper bg-white flex flex-wrap justify-between p-2 w-full rounded-xl mb-2">
        <div className="wrapper1 w-full md:w-1/2 mb-2 md:mb-0">
          <label className="font-serif font-semibold">{labelName}</label>
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

        <div className="wrapper2 w-full md:w-auto">
          <label className="font-serif font-semibold">Currency Type</label>
          <br />
          <select
            className="outline-none font-mono w-full md:w-auto"
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
