'use client';

import {useState} from "react";

interface AmountInputElementProps {
  label: string;
  placeholder: string;
}

export const AmountInputElement = (props: AmountInputElementProps) => {
  const [currency, setCurrency] = useState("inr");
  const [amount, setAmount] = useState(0);

  return (
    <label>
      <span>{props.label}</span>
      <div>
        <select onChange={(e) => setCurrency(e.target.value)} value={currency}>
          <option value="usd">USD $</option>
          <option value="inr">INR ₹</option>
          <option value="eur">EUR €</option>
          <option value="gbp">GBP £</option>
          <option value="aud">AUD $</option>
          <option value="cad">CAD $</option>
          <option value="jpy">JPY ¥</option>
        </select>
        <input type="number"
               onChange={(e) => {
                 setAmount(Math.trunc(Number(e.target.value) * 100) / 100);
               }}
               value={amount === 0 ? "" : amount}
               placeholder={props.placeholder}
               className={`relative text-lg`}
        />
      </div>
    </label>
  )
}

export const TextInputElement = (props: AmountInputElementProps) => {
  const [text, setText] = useState("");
  return (
    <label>
      <span>{props.label}</span>
      <div>
        <input type="text"
               onChange={(e) => setText(e.target.value)}
               value={text}
               placeholder={props.placeholder}
               className={`relative text-lg`}
        />
      </div>
    </label>
  )
}