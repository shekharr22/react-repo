
import React, {useId} from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  curraencyOption = [],
  selectcurrency = "USD",
  amountDisable = false,
  currencyDisable = false,
  className = "",

   
}) {

  const amountInputId = useId()
  
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label className="inline-block mb-2 text-black/40">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="flex flex-wrap justify-end w-1/2 text-right">
        <p className="w-full mb-2 text-black/40">currency Type</p>
        <select
          className="px-1 py-1 bg-gray-100 rounded-lg outline-none cursor-pointer"
          value={selectcurrency}
          onChange={() => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {curraencyOption.map((curraency) => (
            <option key={curraency} value={curraency}>
              {curraency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
